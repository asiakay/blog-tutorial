import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

import { getPostListings } from "~/models/post.server";
import { requireAdminUser } from "~/session.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader = async ({ request }) => {
  await requireAdminUser(request);
  return json<LoaderData>({ posts: await getPostListings() });
};

export default function AdminRoute() {
  const { posts } = useLoaderData() as LoaderData;
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin
      </h1>

      <div className="grid grid-cols-4 gap-6 m-5"> 
      <div className="row">

    <div className="col-4"> 
    <nav className="col-span-4 md:col-span-1">
    <h3>Recent Posts</h3>
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
        </div>

    <div className="col-8"> <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main><br></br>
   
  </div> 
  </div>
 </div>
</div>
  );
}