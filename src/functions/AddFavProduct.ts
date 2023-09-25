import { favouriteProducts } from "../svelte_stores";

export async function AddFavProduct (productnum: number) {
    const res = await fetch("/api/favourite?productnum=" + productnum + "&add=true").then(response => response.json());
    try {
      favouriteProducts.set(JSON.parse(JSON.stringify(res)))
    } catch {
      favouriteProducts.set([])
    }
}