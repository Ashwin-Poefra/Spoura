<script lang="ts">
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';

    import type { PageData } from './$types';
    export let data: PageData;

    let cart_num: number = 0;
    let cart_products: any = [];
    let cart_total: number = 0;
    let count: number = 1;

    onMount(async () => {
        let cart = undefined;
        if (Cookies.get('spoura_cart') != undefined) {
        cart = await fetch(data.base_url + 'api/cart?session_id=' + Cookies.get('spoura_cart')).then(response => response.json());
        cart_products = cart;
        cart_num = cart.length;
        for (var product in cart_products) {
            cart_total += parseFloat(cart_products[product][0].price)
        }
        cart_total = Number(cart_total.toFixed(2))
        }
    });
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
    <div>
        <div class="form-control">
            <div class="px-4 mt-10 grid grid-cols-1">
                <p class="px-2 text-2xl">Basic Details</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 p-4">
                <label class="input-group input-group-vertical p-2">
                    <span>Name</span>
                    <input type="text" placeholder="Matthew Harvey" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Email</span>
                    <input type="text" placeholder="matthewtlharvey@gmail.com" class="input input-bordered" />
                </label>
            </div>
            <div class="px-4 grid grid-cols-1">
                <p class="px-2 text-2xl">Shipping Address</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 p-4">
                <label class="input-group input-group-vertical p-2">
                    <span>Flat/House Number</span>
                    <input type="number" placeholder=11 class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Street</span>
                    <input type="text" placeholder="info@site.com" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Postcode</span>
                    <input type="text" placeholder="info@site.com" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Town/City</span>
                    <input type="text" placeholder="info@site.com" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Country</span>
                    <input type="text" placeholder="info@site.com" class="input input-bordered" />
                </label>
            </div>
            <div class="px-4 grid grid-cols-1">
                <p class="px-2 text-2xl">Payment Details</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 p-4">
                <label class="input-group input-group-vertical p-2">
                    <span>Name Of Card Owner</span>
                    <input type="number" placeholder=11 class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Card Number</span>
                    <input type="number" placeholder=11 class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Expiry Date</span>
                    <input type="date" placeholder=11 class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>CVV</span>
                    <input type="number" placeholder=11 class="input input-bordered" maxlength="3" size="3" />
                </label>
            </div>
          </div>
    </div>
    <div class="relative p-10 max-w-6xl m-auto">
        <h1 class="text-center my-6 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Checkout - {cart_num} Item(s)</h1>
        <p class="text-3xl my-6 m-auto text-center">Subtotal: £{cart_total}</p>
        <a href="/cart"><h2 class="text-center my-2 font-base underline text-xl hover:scale-110 transition ease-in-out delay-15 duration-300" >Back to cart</h2></a>
        {#each cart_products as product}
            <div class="grid grid-cols-3 rounded-lg">
                <img src="{product[0].imgurl.main}" alt="{product[0].name}" class="w-60 h-auto m-auto" />
                <div class="text-2xl m-auto">
                    <a href="/product/{product[0].id}" data-sveltekit-reload class="transition ease-in-out delay-15 duration-300">
                        <h2 class="w-full">{product[0].name}</h2>
                        <div class="badge bg-blue-700 border-0 text-xl p-4">{product[0].category}</div>
                        <div class="badge badge-secondary text-xl p-4">£{product[0].price}</div>
                        <div class="hidden" id={product[0].id}>{product[0].price}</div>
                    </a>
                </div>
                <div class="text-2xl m-auto">
                    <p>Quantity: {count}</p>
                    <p>Size: {count}</p>
                </div>
            </div>
        {/each}
    </div>
</div>