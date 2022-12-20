/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {

    const collection = await prisma.collection.findFirst({
        where: {
            url_slug: params.name.replace(/\s+/g, '-').toLowerCase()
        },
        include: {
            products: true,
        },
    })

    console.log(collection);

    if (collection) {
        return {
            collection: {
                "collection": collection,
                "id": collection?.id,
                "name": collection?.name,
                "url_slug": collection?.url_slug,
                "banner": collection?.banner,
                "products": JSON.stringify(collection?.products),
            }
        };
    } else {
        return {
            "error": true
        }
    }
}