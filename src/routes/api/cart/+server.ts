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
          cartProducts: true
        }
      }); 

      const cartProductsIDS: {id: number}[]  = [];
      let subtotal: number = 0;
      sessionId!.cartProducts.forEach((product) => {
        cartProductsIDS.push({id: product.id})
        subtotal = subtotal + parseFloat(product.price.toString())
      })
      cartProductsIDS.push({id: firstproduct.id})
      subtotal = subtotal + parseFloat(firstproduct.price.toString())

      if (sessionId) { 
        const updatedSession = await prisma.session.update({
          where: {
            id_sessionString: {
              id: sessionId.id, // change to id from getSession db call
              sessionString: existingtoken
            }
          },
          data: {
            cartProducts: {
              set: cartProductsIDS
            }
          }
        });
        console.log(updatedSession)
      }

      const updatedCartProducts = [...sessionId!.cartProducts, firstproduct];
      return new Response(JSON.stringify({cartProducts: updatedCartProducts, subtotal: subtotal}))
      
      // async function AddCartProduct (productnum: number, add: boolean) {
      // cartProducts = await fetch("/api/cart?productnum=" + productnum + "&add=" + add).then(response => response.json());
      // console.log(cartProducts) }
    }
  } else {
    //  remove function
    const sessionId = await prisma.session.findFirst({
      where: {
        sessionString: existingtoken
      },
      include: {
        cartProducts: true
      }
    }); 

    const cartProductsIDS: {id: number}[]  = [];
    const cartProductsFinal: Product[] = [];
    let subtotal: number = 0;
    sessionId!.cartProducts.forEach((product) => {
      if (product.id != parseInt(request.url.searchParams.get("productnum")!)) {
        cartProductsIDS.push({id: product.id})
        // @ts-ignore
        cartProductsFinal.push(product)
        subtotal = subtotal + parseFloat(product.price.toString())
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
          cartProducts: {
            set: cartProductsIDS
          }
        }
      });
      console.log(updatedSession)
    }

    return new Response(JSON.stringify({cartProducts: cartProductsFinal, subtotal: subtotal}))
  }
}
