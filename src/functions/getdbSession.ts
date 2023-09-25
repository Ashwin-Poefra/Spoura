import type { ServerLoadEvent } from "@sveltejs/kit";
import jwt from 'jsonwebtoken'
import { prisma } from "../prisma";
import type { LayoutRouteId } from "../routes/$types";

export async function getDbSession (request: ServerLoadEvent<{name?: string | undefined;productid?: string | undefined;}, {}, LayoutRouteId>) {

    let existingtoken: string = "";
    jwt.verify(request.cookies.get("spouratesting")!, process.env.JWTSECRET!, function(err: any, decoded: any) {
        existingtoken = decoded.sessionid
        //console.log(decoded)
    });

    // console.log(existingtoken)

    const data = await prisma.session.findFirst({
        where: {
            sessionString: {
                equals: existingtoken
            }
        },
        include: {
            cartProducts: true,
            favouriteProducts: true
        }
    })
    return data;

}