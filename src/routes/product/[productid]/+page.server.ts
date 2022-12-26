/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const product = await prisma.product.findFirst({
        where: {
            id: parseInt(params.productid)
        },
        include: {
            collection: true,
        },
    })
    
    if (product) {
        if (product.collection != null) {
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
                    "description": product?.description,
                    "collection": JSON.stringify(product?.collection),
                    "error": false,
                    
                }
        
            };
        } else {
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
                    "description": product?.description,
                    "collection": "",
                    "error": false,
                    
                }
        
            };
        }
    } else {
        return {
            product: {
                "id": 0,
                "name": "",
                "price": 0,
                "category": "",
                "imgurl": {},
                "colour": {},
                "fit": {},
                "size": {},
                "review": {},
                "description": "",
                "collection": "",
                "error": true,
                
            }
        }
    }
}) satisfies PageServerLoad;