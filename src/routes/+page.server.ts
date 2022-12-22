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

    const trend_men = await prisma.product.findMany({
        take: 4,
        where: {
            category: 'Men'
        },
    });
    const trend_women = await prisma.product.findMany({
        take: 4,
        where: {
            category: 'Women'
        },
    });
    const trend_kids = await prisma.product.findMany({
        take: 4,
        where: {
            category: 'Kids'
        },
    });

    if (featured && trend_men && trend_women && trend_kids) {
        return {
            featured: JSON.stringify(featured),
            men: JSON.stringify(trend_men),
            women: JSON.stringify(trend_women),
            kids: JSON.stringify(trend_kids),
        };
    } else {
        return {
            "error": true
        }
    }
}