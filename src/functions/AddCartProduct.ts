import { cartProducts, cartSubtotal } from "../svelte_stores";

export async function AddCartProduct (productnum: number) {
    const res = await fetch("/api/cart?productnum=" + productnum + "&add=true").then(response => response.json());
    try {
        cartProducts.set(JSON.parse(JSON.stringify(res.cartProducts)))
        cartSubtotal.set(res.subtotal)
    } catch {
        cartProducts.set([])
    }
}