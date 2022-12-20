/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {

    const product = await prisma.product.findFirst({
        where: {
            id: parseInt(params.productid)
        }
    })
    
    if (product) {
        return {
            product: {
                "id": product?.id,
                "name": product?.name,
                "price": product?.price.toString(),
                "category": product?.category,
                "imgurl": product?.imgurl,
                "colour": product?.colour,
                "fit": product?.fit,
                "size": product?.size,
                "review": product?.review,
            }
    
        };
    } else {
        return {
            "error": true
        }
    }
}