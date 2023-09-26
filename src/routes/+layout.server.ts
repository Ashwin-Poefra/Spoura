import type { LayoutRouteId, LayoutServerLoad } from './$types';
import jwt from "jsonwebtoken";
import type { ServerLoadEvent } from '@sveltejs/kit';
import { prisma } from '../prisma';
import { getDbSession } from '../functions/getdbSession';
import type { Product } from '@prisma/client';


export const load = (async ( request ) => {

    const all = await prisma.product.findMany({});
    //request.cookies.set("spouratesting", "BUH")

    if (!request.cookies.get("spouratesting")) {
        await createSession(request)
    }

    let data = await getDbSession(request);

    let subtotal = 0;
    let cartproducts: Product[] = []
    if (data?.cartProducts) {
        cartproducts = data.cartProducts
    }
    cartproducts.forEach((product) => {
        subtotal = subtotal + parseFloat(product.price.toString())
    })

    let favproducts: Product[] = []
    if (data?.favouriteProducts) {
        favproducts = data.favouriteProducts
    }

    return {
        all: JSON.stringify(all),
        base_url: process.env.BASE_URL,
        cartProducts: JSON.stringify(cartproducts),
        favouriteProducts:  JSON.stringify(favproducts),
        cartSubtotal: subtotal
    };

}) satisfies LayoutServerLoad;


async function createSession(request: ServerLoadEvent<{name?: string | undefined;productid?: string | undefined;}, {}, LayoutRouteId>) {

    // console.log("Create a new session")
    // console.log(request.cookies.get("spouratesting"))

    let sessionid = [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
    var token = jwt.sign({ sessionid: sessionid }, process.env.JWTSECRET!);
    request.cookies.set("spouratesting", token)
    await prisma.session.create({data: { sessionString: sessionid }})

}

// async function existingSession(request: ServerLoadEvent<{name?: string | undefined;productid?: string | undefined;}, {}, LayoutRouteId>) {

//     console.log("Existing session")
//     console.log(request.cookies.get("spouratesting"))

// }
