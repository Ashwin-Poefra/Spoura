/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const collection = await prisma.collection.findFirst({
        where: {
            url_slug: params.name.replace(/\s+/g, '-').toLowerCase()
        },
        include: {
            products: true,
        },
    })

    if (collection) {
        return {
            collection: {
                "id": collection?.id,
                "name": collection?.name,
                "url_slug": collection?.url_slug,
                "banner": collection?.banner,
                "products": JSON.stringify(collection?.products),
                "error": false,
            }
        };
    } else {
        return {
            collection: {
                "id": 0,
                "name": "",
                "url_slug": "",
                "banner": "",
                "products": "",
                "error": true,
            }
        }
    }
}) satisfies PageServerLoad;