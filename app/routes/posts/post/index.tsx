import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader: LoaderFunction = async () => {
  return json({slug: await getPosts() });
};

export default function PostIndexRoute() {
    const { posts } = useLoaderData<typeof loader>();
    return (
        <div>
 {posts.map((post) => (
              <div key={post.slug}>
                <Link
                  to={`/posts/${post.slug}`}
                  className="text-blue-600 underline"
                >
                  {post.title}
                </Link>
              </div>
            ))}
            </div>
    );
 
}