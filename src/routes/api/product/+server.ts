/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function GET() {
  const product = await prisma.product.findMany({});
  return new Response(JSON.stringify(product))
}

export async function POST({request}: any) {
  const { product } = await request.JSON();
  const addedproduct = await prisma.user.create({
    data: product
  })
  return new Response(JSON.stringify({
    message: "added product",
    product: addedproduct
  }))
}