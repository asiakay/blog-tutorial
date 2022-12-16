import { json } from "@remix-run/node";
import { Link, useLoaderData, Outlet, NavLink } from "@remix-run/react";



import { getPosts } from "~/models/post.server";

export const loader = async () => {
    return json({ posts: await getPosts() });
  };


  function NavList() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
/*     const activeStyle = {
      textDecoration: "underline",
    }; */
    const activeClassName = "underline";
    return (
      <nav>
        <ul>
{/*           <li>
            <NavLink
              to="messages"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Messages
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="tasks"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="tasks">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  Tasks
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  
export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
    //console.log(loader);
    console.log(posts);
    return (
      <main>


<NavLink to="/" end>
  Home
</NavLink>
<NavLink to="admin" end>
  Admin
</NavLink>
        
                
        <h1>Posts</h1>
        <h2>Topics</h2>
        <hr/>


        <Link to="admin" className="text-red-600 underline">Admin
        </Link>



        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
      </main>
    );
  }