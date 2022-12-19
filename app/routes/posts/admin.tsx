import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin
      </h1>
      <div className="grid grid-cols-4 gap-6 m-5">



        
        <nav className="col-span-4 md:col-span-1">Sidebar
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
        </nav>
        <main className="col-span-4 md:col-span-3">Main Section
          <Outlet />
        </main>
      </div>
    </div>
  );
}