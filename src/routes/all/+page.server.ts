/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

import type { PageServerLoad } from './$types';

export const load = (async () => {
    const all = await prisma.product.findMany({});
    
    if (all) {
        return {
            all: JSON.stringify(all),
            error: false,
        };
    } else {
        return {
            all: "",
            error: true,
        }
    }
}) satisfies PageServerLoad;