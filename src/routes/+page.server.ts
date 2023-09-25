 import type { PageServerLoad } from './$types';
import { prisma } from '../prisma';

export const load = (async () => {
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
            category: 'Mens'
        },
    });
    const trend_women = await prisma.product.findMany({
        take: 4,
        where: {
            category: 'Womens'
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
            "error": false,
        };
    } else {
        return {
            featured: "",
            men: "",
            women: "",
            kids: "",
            "error": true,
        }
    }
}) satisfies PageServerLoad;