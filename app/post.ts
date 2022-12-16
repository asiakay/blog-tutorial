//create a reference to prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// async function since we will be loading external data

export async function getPosts(){
    // await prisma connection
    await prisma.$connect()
    // getting all posts 
    const allPosts = await prisma.post.findMany();
    // cleaning up connection 
    prisma.$disconnect();
    // show returned in console
    console.log(allPosts)
    return allPosts;
}