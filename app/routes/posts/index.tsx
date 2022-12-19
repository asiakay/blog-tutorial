import { json } from "@remix-run/node";
import { Link, useLoaderData, Outlet } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
    return json({ posts: await getPosts() });
  };

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
    //console.log(loader);
    console.log(posts);
    return (
      <div className="mx-auto max-w-4xl">
        <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
          Recent Posts
        </h1>
        <div className="grid grid-cols-4 gap-6 m-5">
        <nav className="col-span-4 md:col-span-1">Recent Posts
        
        {posts.map((post) => (
          <div className="card" key={post.slug}>
          <div className="card-body" >
            <Link
              to={`/posts/${post.slug}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </div>
          </div>
        ))}
      
      </nav>

      
      <main className="col-span-4 md:col-span-3">
      <Outlet />
      </main>
      </div>
      </div>
    );
  }