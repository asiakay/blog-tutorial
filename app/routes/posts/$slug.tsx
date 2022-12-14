
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link,useLoaderData, Outlet } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";
import { getPost, getPosts } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
    invariant(params.slug, `params.slug is required`);

    const post = await getPost(params.slug);
    invariant(post, `Post not found: ${params.slug}`);

    const html = marked(post.markdown);

    const posts = await getPosts()
    return json({ post, html, posts });};



export default function PostSlug() {
    const { post, html, posts } = useLoaderData<typeof loader>();
    return (
      <div className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
      {post.title}
      </h1>
      <div className="grid grid-cols-4 gap-6 m-5">
      <div className="row">
      <div className="col-4"> 

      <nav className="col-span-4 md:col-span-1">
        <h3>Recent Posts
          </h3>
      <div>
        {[...posts].reverse().map((post) => (
          <div key={post.slug} className="">
            <Link
              to={`/posts/${post.slug}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
</nav>
</div>

<div className="col-8">
<main className="col-span-4 md:col-span-3">
<Outlet/>
<div dangerouslySetInnerHTML={{ __html: html }} />
</main>
</div>
</div>
    </div>
    </div>
  );
}