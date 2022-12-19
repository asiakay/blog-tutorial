import { json } from "@remix-run/node";

import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
//import { Outlet } from "@remix-run/react";

export const loader = async () => {
    return json({ posts: await getPosts() });
  };

export default function BlogSidebar(){
    const { posts } = useLoaderData<typeof loader>();
        console.log(posts);

return (
 <>
{/*  https://getbootstrap.com/docs/5.2/components/list-group/#basic-example
 */} 
 <div className="card shadow p-3 mb-5 bg-body rounded">
 {posts && 
    posts.map((post) => {
    return (
      <div className="card-body shadow p-3 mb-5 bg-body rounded" key={post.slug} >
        <Link className="list-group-item list-group-item-action" to={post.slug}><h3>{post.title}</h3></Link>
        </div>
        );
        })}
</div>
</>
 );
}