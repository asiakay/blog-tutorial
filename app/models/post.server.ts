import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export async function createPost(  
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  
  return prisma.post.create({ data: post });
}

export async function updatePost(
  slug: string,
  post: Pick<Post, "slug" | "title" | "markdown">
){
  return prisma.post.update({data: post, where: {slug}});
}

export async function getPosts() {
  return prisma.post.findMany();
}

export async function deletePost(){
  return prisma.post.deleteMany({ where: { } });

}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}