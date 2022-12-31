<script lang="ts">
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';

    import type { PageData } from './$types';
    export let data: PageData;

    let cart_num: number = 0;
    let cart_products: any = [];
    let cart_total: number = 0;

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
    const removeCart = async (id: number) => {
      if (Cookies.get("spoura_cart") != undefined) {
          let original_cookie: any = Cookies.get("spoura_cart");
          Cookies.set("spoura_cart", original_cookie.replace("//" + id, ""), {sameSite: "strict", secure: true, expires: 500});
      }
    }
</script>

<h1 class="text-center my-6 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Cart - {cart_num} Items</h1>
<div class="p-6 max-w-6xl m-auto">
    {#each cart_products as product}
        <div class="grid grid-cols-3">
            <a href="/product/{product[0].id}" data-sveltekit-reload class="transition ease-in-out delay-15 duration-300">
                <div class="text-xl m-auto">
                    <div>
                        <h2 class="w-full">{product[0].name}</h2>
                        <div class="badge bg-blue-700 border-0">{product[0].category}</div>
                        <div class="badge badge-secondary">£{product[0].price}</div>
                    </div>
                </div>
            </a>
            <img src="{product[0].imgurl.main}" alt="{product[0].name}" class="w-60 m-auto" />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a on:click={removeCart(product[0].id)} data-sveltekit-reload href="javascript:window.location.href=window.location.href" class="m-auto">
                <svg class="h-5 w-5" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z"></path></g></svg>
            </a>
        </div>
    {/each}
</div>