import { prisma } from '../../../prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

    try{ 
        const product = await prisma.product.findFirst({
            where: {
                id: parseInt(params.productid)
            },
            include: {
                collection: true,
            },
        })

        if (product) {
            return {
                product: JSON.stringify(product),
                urlid: parseInt(params.productid)
            }
        } else {
            return {
                product: "{}",
                urlid: parseInt(params.productid)
            }
        }

    } catch {
        return {
            product: "{}",
            urlid: 0
        }
    }

}) satisfies PageServerLoad;