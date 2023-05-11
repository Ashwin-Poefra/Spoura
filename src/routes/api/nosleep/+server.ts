import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function GET() {

  await prisma.user.findMany({});

  await prisma.user.create({
    data: {
        name: "nosleep",
        email: "nosleep@gmail.com",
        purchase: {}
    },
  });

  await prisma.user.delete({
    where: {
        email: "nosleep@gmail.com"
    }
  });

  return new Response(JSON.stringify({nosleep: true}))
}