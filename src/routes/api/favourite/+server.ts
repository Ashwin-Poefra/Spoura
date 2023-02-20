/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function GET({ params } : any) {
  const favourite = await prisma.favourite.findMany({
    where: {
        session_id: params.session_id,
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