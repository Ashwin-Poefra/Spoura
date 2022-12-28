/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function GET({ url } : any) {
  const session_id = url.searchParams.get('session_id');
  const favourite = await prisma.favourite.findMany({
    where: {
        session_id: session_id
    },
    include: {
        products: true
    }
  });
  return new Response(JSON.stringify(favourite))
}

export async function POST({request}: any) {
  const { favourite } = await request.JSON();
  const addedFavourite = await prisma.favourite.create({
    data: favourite
  })
  return new Response(JSON.stringify({
    message: "added favourite",
    product: addedFavourite
  }))
}