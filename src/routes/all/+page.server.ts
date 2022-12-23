/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const all = await prisma.product.findMany({});
    
    if (all) {
        return {
            all: JSON.stringify(all),
        };
    } else {
        return {
            "error": true
        }
    }
}