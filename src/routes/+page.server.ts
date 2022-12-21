/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const productsCount = await prisma.product.count();
    const skip = Math.floor(Math.random() * (productsCount-6));
    const featured = await prisma.product.findMany({
        take: 6,
        skip: skip,
        orderBy: {
            price: 'desc',
        },
    });

    if (featured) {
        return {
            featured: JSON.stringify(featured)
        };
    } else {
        return {
            "error": true
        }
    }
}