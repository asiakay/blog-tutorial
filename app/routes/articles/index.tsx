import { json } from "@remix-run/node";
import { Link, useLoaderData, Outlet } from "@remix-run/react";



import { getArticles } from '@polyblog/polyblog-js-client'

export const loader = async () => {
    return json({ posts: await getArticles() });
  };



  
export default function Article({article}) {
    //console.log(loader);
    console.log(article);
    return (
   <div>
        {article && (
            <div><h1>{article.title}</h1>
            <div>{article.subtitle}</div>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
        )}
     </div>
    );
  }