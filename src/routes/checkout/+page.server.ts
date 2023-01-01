import type { PageServerLoad } from '../$types';

/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';

import Stripe from 'stripe';

const prisma = new PrismaClient();

export const load = (async () => {
    // @ts-ignore
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const createCustomer = async () => {
        const params: Stripe.CustomerCreateParams = {
            description: 'test customer',
        };
        const customer: Stripe.Customer = await stripe.customers.create(params);
        console.log(customer.id);
    };
    //createCustomer();
    const all = await prisma.product.findMany({});
    if (all) {
        return {
            all: JSON.stringify(all),
            base_url: process.env.BASE_URL,
        };
    } else {
        return {
            "error": true
        }
    }
}) satisfies PageServerLoad;