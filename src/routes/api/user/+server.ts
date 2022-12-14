/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function GET() {
  const user = await prisma.user.findMany({});
  return new Response(JSON.stringify(user))
}

export async function POST({request}: any) {
  const { user } = await request.JSON();
  const addeduser = await prisma.user.create({
    data: user
  })
  return new Response(JSON.stringify({
    message: "added user",
    user: addeduser
  }))
}