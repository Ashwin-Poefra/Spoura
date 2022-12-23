import type { LayoutServerLoad } from './api/$types';

/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = (async () => {
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
}) satisfies LayoutServerLoad;