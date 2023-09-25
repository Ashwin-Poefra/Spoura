import type { LayoutRouteId, LayoutServerLoad } from './$types';
import jwt from "jsonwebtoken";
import type { ServerLoadEvent } from '@sveltejs/kit';
import { prisma } from '../prisma';
import { getDbSession } from '../functions/getdbSession';


export const load = (async ( request ) => {

    const all = await prisma.product.findMany({});
    //request.cookies.set("spouratesting", "BUH")

    if (!request.cookies.get("spouratesting")) {
        await createSession(request)
    }

    let data = await getDbSession(request);

    let subtotal = 0;
    data?.cartProducts.forEach((product) => {
        subtotal = subtotal + parseFloat(product.price.toString())
    })

    return {
        all: JSON.stringify(all),
        base_url: process.env.BASE_URL,
        cartProducts: JSON.stringify(data?.cartProducts),
        favouriteProducts:  JSON.stringify(data?.favouriteProducts),
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
