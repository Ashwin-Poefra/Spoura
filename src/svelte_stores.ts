import { writable } from "svelte/store";
import type { Writable } from "svelte/store"
import type { Product } from "./prismatypes";

export const favouriteProducts: Writable<Product[]> = writable()
export const cartProducts: Writable<Product[]> = writable()
export const cartSubtotal: Writable<number> = writable()