 import type { PageServerLoad } from './$types';
import { prisma } from '../../../prisma';

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
            collection: collection
        }
    } else {
        return {
            collection: null
        }
    }
}) satisfies PageServerLoad;