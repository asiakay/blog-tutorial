import type { LoaderArgs } from '@remix-run/node';
import { json } from "@remix-run/node";

import { getArticle, getArticles } from '@polyblog/polyblog-js-client';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderArgs) => {
    invariant(params.slug, `params.slug is required`);

    const article = await getArticle(params.slug);
    invariant(article, `Article not found: ${params.slug}`);

    const articles = await getArticles()
    return json({ article, articles});

};

export default function Article({article}) {
  return (
    <div>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <div>{article.subtitle}</div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      )}
    </div>
  )
}