/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequestEvent } from './$types';
import jwt from "jsonwebtoken";
import type { Product } from '../../../prismatypes';
import { prisma } from '../../../prisma';

/** @type {import('./$types').RequestHandler} */

export async function GET(request: RequestEvent) {

  let existingtoken: string = "";
  jwt.verify(request.cookies.get("spouratesting")!, process.env.JWTSECRET!, function(err: any, decoded: any) {
      existingtoken = decoded.sessionid
      //console.log(decoded)
  });

  if ( request.url.searchParams.get("add") == "true") {

    const firstproduct = await prisma.product.findFirst({
      where: {
        id: parseInt(request.url.searchParams.get("productnum")!)
      }
    });

    if (firstproduct) {
      //  add function 
      const sessionId = await prisma.session.findFirst({
        where: {
          sessionString: existingtoken
        },
        include: {
          favouriteProducts: true
        }
      }); 

      const favProductsIDS: {id: number}[]  = [];
      sessionId!.favouriteProducts.forEach((product) => {
        favProductsIDS.push({id: product.id})
      })
      const updatedFavProducts = [...sessionId!.favouriteProducts];

      if (!favProductsIDS.some(obj => obj.id === firstproduct.id)) {
        updatedFavProducts.push(firstproduct)
        favProductsIDS.push({id: firstproduct.id})
      }

      if (sessionId) { 
        const updatedSession = await prisma.session.update({
          where: {
            id_sessionString: {
              id: sessionId.id, // change to id from getSession db call
              sessionString: existingtoken
            }
          },
          data: {
            favouriteProducts: {
              set: favProductsIDS
            }
          }
        });
        console.log(updatedSession)
      }

      return new Response(JSON.stringify(updatedFavProducts))
      
    }
  } else {
    //  remove function
    const sessionId = await prisma.session.findFirst({
      where: {
        sessionString: existingtoken
      },
      include: {
        favouriteProducts: true
      }
    }); 

    const favProductsIDS: {id: number}[]  = [];
    const favProductsFinal: Product[] = [];
    sessionId!.favouriteProducts.forEach((product) => {
      if (product.id != parseInt(request.url.searchParams.get("productnum")!)) {
        favProductsIDS.push({id: product.id})
        // @ts-ignore
        favProductsFinal.push(product)
      }
    })

    if (sessionId) { 
      const updatedSession = await prisma.session.update({
        where: {
          id_sessionString: {
            id: sessionId.id, // change to id from getSession db call
            sessionString: existingtoken
          }
        },
        data: {
          favouriteProducts: {
            set: favProductsIDS
          }
        }
      });
      console.log(updatedSession)
    }

    return new Response(JSON.stringify(favProductsFinal))
  }
}
