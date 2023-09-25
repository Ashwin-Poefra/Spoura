<script lang="ts">
    // import type { PageData } from './$types';
    // export let data: PageData;

    import { cartProducts, cartSubtotal } from '../../svelte_stores';
    import type { Product } from '../../prismatypes';
    import { RemoveCartProduct } from '../../functions/RemoveCartProduct';

    let CartProducts: Product[];
	cartProducts.subscribe((product) => {
		CartProducts = product;
	});
    let CartSubtotal: number;
	cartSubtotal.subscribe((subtotal) => {
		CartSubtotal = subtotal;
	});
</script>

<div class="grid grid-cols-1">
    <h1 class="text-center my-6 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Cart - {CartProducts.length} Item(s)</h1>
    <p class="text-3xl my-6 m-auto text-center">Subtotal: £{CartSubtotal}</p>
    <a href="/checkout" class="m-auto text-center"><button class="btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg m-auto text-center">Checkout</button></a>
</div>
<div class="relative p-10 max-w-6xl m-auto">
    {#each CartProducts as product}
        <div class="grid grid-cols-3 shadow-lg ring-1 ring-slate-400 p-4 rounded-lg my-2">
            <img src="{product.imgurl}" alt="{product.name}" class="w-60 m-auto" />
            <div>
                <div class="text-3xl m-auto">
                    <a href="/product/{product.id}" data-sveltekit-reload class="transition ease-in-out delay-15 duration-300">
                        <h2 class="w-full">{product.name}</h2>
                        <div class="badge bg-blue-700 border-0 text-xl p-4">{product.category}</div>
                        <div class="badge badge-secondary text-xl p-4">£{product.price}</div>
                        <div class="hidden">{product.price}</div>
                    </a>
                </div>
                <p class="p-2">Quantity: </p>
                <div class="flex space-x-2 rounded-xl bg-gray-200 p-2 w-40 justify-center">
                    <button class="w-4 p-2">-</button>
                    <span class="w-4 p-2">{product.quantity}</span>
                    <button class="w-4 p-2">+</button>
                </div>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={async ()=> await RemoveCartProduct(product.id)} class="m-auto">
                <svg class="h-5 w-5" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z"></path></g></svg>
            </a>
        </div>
    {/each}
</div>