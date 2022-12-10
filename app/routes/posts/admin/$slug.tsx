import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";

import invariant from "tiny-invariant";

import { getPost } from "~/models/post.server";


export const loader = async ({ params }: LoaderArgs) => {
    invariant(params.slug, `params.slug is required`);

    const post = await getPost(params.slug);
    invariant(post, `Post not found: ${params.slug}`);

    const html = marked(post.markdown);
    return json({ post, html });};

export const action = async ({ request }: ActionArgs) => {
    await new Promise((res) => setTimout(res, 1000));

    const formData = await request.formData();
    const title = formData.get("title");
    const slug = formData.get("slug");
    const markdown = formData.get("markdown");

await createPost({ title, slug, markdown});

return redirect("/posts/admin");
};

export default function PostSlug() {
    const { post, html } = useLoaderData<typeof loader>();
    return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
      {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />

    </main>
  );
}