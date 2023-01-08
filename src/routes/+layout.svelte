<script lang="ts">
  import "../app.css";
  // @ts-ignore
  import AutoComplete from "simple-svelte-autocomplete";
  import type { LayoutData } from './$types';
  export let data: LayoutData;
  const all = data.all;
  // @ts-ignore
  const parse_all = JSON.parse(all);
  let namearr: any[] = [];
  for(let i = 0; i < parse_all.length; i++) {
      let obj = parse_all[i];
      namearr.push(obj.name);
  }
  let selectedproduct: any = "";
  let productid: number = 0;
  function search() {
    if (selectedproduct) {
      for(let i = 0; i < parse_all.length; i++) {
        let obj = parse_all[i];
        if (obj.name == selectedproduct) {
            productid = obj.id;
        }
      }
    }
  }
  import { onMount } from 'svelte';
  import Cookies from 'js-cookie';

  let fav_num: number = 0;
  let fav_products: Array<any> = [];

  onMount(async () => {
    let fav = undefined;
    if (Cookies.get('spoura_fav') != undefined) {
      fav = await fetch(data.base_url + 'api/favourite?session_id=' + Cookies.get('spoura_fav')).then(response => response.json());
      fav_products = fav;
      fav_num = fav.length;
    }
  });

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

  const removeFavourite = async (id: number) => {
        if (Cookies.get("spoura_fav") != undefined) {
          let original_cookie: any = Cookies.get("spoura_fav");
          Cookies.set("spoura_fav", original_cookie.replace("//" + id, ""), {sameSite: "strict", secure: true, expires: 500});
        }
    }
    const removeCart = async (id: number) => {
      if (Cookies.get("spoura_cart") != undefined) {
          let original_cookie: any = Cookies.get("spoura_cart");
          Cookies.set("spoura_cart", original_cookie.replace("//" + id, ""), {sameSite: "strict", secure: true, expires: 500});
      }
    }
</script>

<style>
  /* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
  }
  /* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .hoverable {
    position: static;
  }
  .hoverable > a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }
  .hoverable:hover .mega-menu {
    display: block;
  }

</style>


<div class="navbar bg-base-100 sticky shadow-xl top-0 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96">
            <div class="flex">
              <AutoComplete items="{namearr}" bind:selectedItem="{selectedproduct}" placeholder="Search" class="rounded-lg h-auto p-2 bg-slate-200 w-72" />
              <a tabindex="0" class="btn btn-ghost btn-circle ml-4" on:click={search} data-sveltekit-reload href={"/product/" + productid}>
                <div class="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-search" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="15" cy="15" r="4" /> <path d="M18.5 18.5l2.5 2.5" /> <path d="M4 6h16" /> <path d="M4 12h4" /> <path d="M4 18h4" /> </svg>
                </div>
              </a>
            </div>
            <li tabindex="0" class="grid grid-cols-3 py-2">
              <div class="font-semibold text-lg col-span-3">Products</div>
              <a class="font-base underline text-md" href="/shop?sort=Latest" data-sveltekit-reload>New In</a>
              <a class="font-base underline text-md" href="/shop?sort=Trending" data-sveltekit-reload>Trending</a>
              <a class="font-base underline text-md" href="/shop?sort=All" data-sveltekit-reload>All</a>
            </li>
            <li tabindex="0" class="grid grid-cols-3 py-2">
              <div class="font-semibold text-lg col-span-3">Brands</div>
              <a class="font-base underline text-md" href="/shop?brand=Nike" data-sveltekit-reload>Nike</a>
              <a class="font-base underline text-md" href="/shop?brand=Adidas" data-sveltekit-reload>Adidas</a>
              <a class="font-base underline text-md" href="/shop?brand=Puma" data-sveltekit-reload>Puma</a>
              <a class="font-base underline text-md" href="/shop?brand=Under%20Armour" data-sveltekit-reload>Under Armour</a>
            </li>
            <li tabindex="0" class="grid grid-cols-3 py-2">
              <div class="font-semibold text-lg col-span-3">Collections</div>
              <a class="font-base underline text-md" href="/shop?brand=Nike" data-sveltekit-reload>Nike</a>
              <a class="font-base underline text-md" href="/shop?brand=Adidas" data-sveltekit-reload>Adidas</a>
              <a class="font-base underline text-md" href="/shop?brand=Puma" data-sveltekit-reload>Puma</a>
              <a class="font-base underline text-md" href="/shop?brand=Under%20Armour" data-sveltekit-reload>Under Armour</a>
            </li>
            <li tabindex="0" class="grid grid-cols-1 py-2">
              <a class="font-semibold text-lg justify-between" href="/about">
                About
              </a>
            </li>
            <li tabindex="0" class="grid grid-cols-1 py-2">
              <a class="font-semibold text-lg justify-between" href="/about">
                Contact
              </a>
            </li>
        </ul>
      </div>
      <a class="btn btn-ghost font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900" href="/">Spoura</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul class="menu menu-horizontal px-1" tabindex="0">
        <li class="hoverable hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">
          <div class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">
            Mens
          </div>
          <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-gradient-to-r from-blue-500 to-blue-900">
            <div class="grid grid-cols-5 m-auto">
              <img src="/banner-right-image.png" alt="nav mens img" class="w-60" />
              <div>
                <h2 class="font-bold text-4xl flex pb-4">Mens</h2>
                <p class="font-base text-xl w-52">Select what suits your style best...</p>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path> </g></svg>
                  Products
                </div>
                <a class="font-base underline text-xl" href="/shop?sort=Latest&type=Mens" data-sveltekit-reload>New In</a>
                <a class="font-base underline text-xl" href="/shop?sort=Trending&type=Mens" data-sveltekit-reload>Trending</a>
                <a class="font-base underline text-xl" href="/shop?sort=All&type=Mens" data-sveltekit-reload>All</a>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0,1,2-3.169A9.269,9.269,0,0,1,8.1,2.862a10.605,10.605,0,0,1,4.175-.787,10.516,10.516,0,0,1,4.334.827A8.437,8.437,0,0,1,19.64,5.119a8.622,8.622,0,0,1,1.707,3.1,9.263,9.263,0,0,1,.377,3.487,5.809,5.809,0,0,1-1.3,3.6A3.6,3.6,0,0,1,17.7,16.473a3.628,3.628,0,0,1-2.162-.609,2.82,2.82,0,0,1-1.119-1.694l.5.106a2.582,2.582,0,0,1-1.3,1.3A4.37,4.37,0,0,1,11.746,16,3.681,3.681,0,0,1,9.88,15.54a3.2,3.2,0,0,1-1.237-1.271A3.843,3.843,0,0,1,8.2,12.4a3.88,3.88,0,0,1,.456-1.926A3.191,3.191,0,0,1,9.919,9.214a3.792,3.792,0,0,1,1.853-.443,4.716,4.716,0,0,1,1.767.364,2.622,2.622,0,0,1,1.383,1.3l-.5.5V9.461a.4.4,0,0,1,.4-.4h.232a.4.4,0,0,1,.4.4v3.518a2.723,2.723,0,0,0,.529,1.674,2.173,2.173,0,0,0,1.853.708,2.281,2.281,0,0,0,1.323-.41,2.938,2.938,0,0,0,.967-1.178,4.947,4.947,0,0,0,.437-1.852,9.439,9.439,0,0,0-.417-3.574A7.285,7.285,0,0,0,18.5,5.588a7.424,7.424,0,0,0-2.679-1.78,9.605,9.605,0,0,0-3.547-.622,9.041,9.041,0,0,0-3.758.741,8.252,8.252,0,0,0-2.773,2,8.8,8.8,0,0,0-1.72,2.838,9.27,9.27,0,0,0-.589,3.262,8.568,8.568,0,0,0,.682,3.408A8.951,8.951,0,0,0,6,18.24a8.707,8.707,0,0,0,2.785,1.892,8.515,8.515,0,0,0,3.389.682,9.851,9.851,0,0,0,2.679-.378,8.451,8.451,0,0,0,2-.831.4.4,0,0,1,.553.158l.1.192a.4.4,0,0,1-.141.526,9.832,9.832,0,0,1-2.391,1.04A10.5,10.5,0,0,1,12.09,21.925ZM11.8,14.859a2.469,2.469,0,0,0,1.786-.649,2.427,2.427,0,0,0,.675-1.839,2.414,2.414,0,0,0-.7-1.886A2.532,2.532,0,0,0,11.8,9.856a2.482,2.482,0,0,0-1.839.649,2.523,2.523,0,0,0-.65,1.866,2.4,2.4,0,0,0,.682,1.865A2.574,2.574,0,0,0,11.8,14.859Z"></path> </g></svg>
                  Brands
                </div>
                <a class="font-base underline text-xl" href="/shop?brand=Nike&type=Mens" data-sveltekit-reload>Nike</a>
                <a class="font-base underline text-xl" href="/shop?brand=Adidas&type=Mens" data-sveltekit-reload>Adidas</a>
                <a class="font-base underline text-xl" href="/shop?brand=Puma&type=Mens" data-sveltekit-reload>Puma</a>
                <a class="font-base underline text-xl" href="/shop?brand=Under%20Armour&type=Mens" data-sveltekit-reload>Under Armour</a>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor" data-name="Box List"> <path d="M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"></path> <path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"></path> </g></svg>
                  Collections
                </div>
                <a class="font-base underline text-xl" href="/shop?brand=Nike&type=Mens" data-sveltekit-reload>Nike</a>
                <a class="font-base underline text-xl" href="/shop?brand=Adidas&type=Mens" data-sveltekit-reload>Adidas</a>
                <a class="font-base underline text-xl" href="/shop?brand=Puma&type=Mens" data-sveltekit-reload>Puma</a>
                <a class="font-base underline text-xl" href="/shop?brand=Under%20Armour&type=Mens" data-sveltekit-reload>Under Armour</a>
              </div>
            </div>
          </div>
        </li>
        <li class="hoverable hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">
          <div class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">Womens</div>
          <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-gradient-to-r from-blue-500 to-blue-900">
            <div class="grid grid-cols-5 m-auto">
              <img src="/womens_nav.png" alt="nav womens img" class="w-72" />
              <div>
                <h2 class="font-bold text-4xl flex pb-4">Womens</h2>
                <p class="font-base text-xl w-52">Select what suits your style best...</p>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path> </g></svg>
                  Products
                </div>
                <a class="font-base underline text-xl" href="/shop?sort=Latest&type=Womens" data-sveltekit-reload>New In</a>
                <a class="font-base underline text-xl" href="/shop?sort=Trending&type=Womens" data-sveltekit-reload>Trending</a>
                <a class="font-base underline text-xl" href="/shop?sort=All&type=Womens" data-sveltekit-reload>All</a>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0,1,2-3.169A9.269,9.269,0,0,1,8.1,2.862a10.605,10.605,0,0,1,4.175-.787,10.516,10.516,0,0,1,4.334.827A8.437,8.437,0,0,1,19.64,5.119a8.622,8.622,0,0,1,1.707,3.1,9.263,9.263,0,0,1,.377,3.487,5.809,5.809,0,0,1-1.3,3.6A3.6,3.6,0,0,1,17.7,16.473a3.628,3.628,0,0,1-2.162-.609,2.82,2.82,0,0,1-1.119-1.694l.5.106a2.582,2.582,0,0,1-1.3,1.3A4.37,4.37,0,0,1,11.746,16,3.681,3.681,0,0,1,9.88,15.54a3.2,3.2,0,0,1-1.237-1.271A3.843,3.843,0,0,1,8.2,12.4a3.88,3.88,0,0,1,.456-1.926A3.191,3.191,0,0,1,9.919,9.214a3.792,3.792,0,0,1,1.853-.443,4.716,4.716,0,0,1,1.767.364,2.622,2.622,0,0,1,1.383,1.3l-.5.5V9.461a.4.4,0,0,1,.4-.4h.232a.4.4,0,0,1,.4.4v3.518a2.723,2.723,0,0,0,.529,1.674,2.173,2.173,0,0,0,1.853.708,2.281,2.281,0,0,0,1.323-.41,2.938,2.938,0,0,0,.967-1.178,4.947,4.947,0,0,0,.437-1.852,9.439,9.439,0,0,0-.417-3.574A7.285,7.285,0,0,0,18.5,5.588a7.424,7.424,0,0,0-2.679-1.78,9.605,9.605,0,0,0-3.547-.622,9.041,9.041,0,0,0-3.758.741,8.252,8.252,0,0,0-2.773,2,8.8,8.8,0,0,0-1.72,2.838,9.27,9.27,0,0,0-.589,3.262,8.568,8.568,0,0,0,.682,3.408A8.951,8.951,0,0,0,6,18.24a8.707,8.707,0,0,0,2.785,1.892,8.515,8.515,0,0,0,3.389.682,9.851,9.851,0,0,0,2.679-.378,8.451,8.451,0,0,0,2-.831.4.4,0,0,1,.553.158l.1.192a.4.4,0,0,1-.141.526,9.832,9.832,0,0,1-2.391,1.04A10.5,10.5,0,0,1,12.09,21.925ZM11.8,14.859a2.469,2.469,0,0,0,1.786-.649,2.427,2.427,0,0,0,.675-1.839,2.414,2.414,0,0,0-.7-1.886A2.532,2.532,0,0,0,11.8,9.856a2.482,2.482,0,0,0-1.839.649,2.523,2.523,0,0,0-.65,1.866,2.4,2.4,0,0,0,.682,1.865A2.574,2.574,0,0,0,11.8,14.859Z"></path> </g></svg>
                  Brands
                </div>
                <a class="font-base underline text-xl" href="/shop?brand=Nike&type=Womens" data-sveltekit-reload>Nike</a>
                <a class="font-base underline text-xl" href="/shop?brand=Adidas&type=Womens" data-sveltekit-reload>Adidas</a>
                <a class="font-base underline text-xl" href="/shop?brand=Puma&type=Womens" data-sveltekit-reload>Puma</a>
                <a class="font-base underline text-xl" href="/shop?brand=Under%20Armour&type=Womens" data-sveltekit-reload>Under Armour</a>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor" data-name="Box List"> <path d="M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"></path> <path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"></path> </g></svg>
                  Collections
                </div>
                <a class="font-base underline text-xl" href="/shop?brand=Nike&type=Womens" data-sveltekit-reload>Nike</a>
                <a class="font-base underline text-xl" href="/shop?brand=Adidas&type=Womens" data-sveltekit-reload>Adidas</a>
                <a class="font-base underline text-xl" href="/shop?brand=Puma&type=Womens" data-sveltekit-reload>Puma</a>
                <a class="font-base underline text-xl" href="/shop?brand=Under%20Armour&type=Womens" data-sveltekit-reload>Under Armour</a>
              </div>
            </div>
          </div>
        </li>
        <li class="hoverable hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">
          <div class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">Kids</div>
          <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-gradient-to-r from-blue-500 to-blue-900">
            <div class="grid grid-cols-5 m-auto">
              <img src="/kids_nav.png" alt="nav mens img" class="w-48 pl-10" />
              <div>
                <h2 class="font-bold text-4xl flex pb-4">Kids</h2>
                <p class="font-base text-xl w-52">Select what suits your style best...</p>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path> </g></svg>
                  Products
                </div>
                <a class="font-base underline text-xl" href="/shop?sort=Latest&type=Kids" data-sveltekit-reload>New In</a>
                <a class="font-base underline text-xl" href="/shop?sort=Trending&type=Kids" data-sveltekit-reload>Trending</a>
                <a class="font-base underline text-xl" href="/shop?sort=All&type=Kids" data-sveltekit-reload>All</a>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor"> <path d="M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0,1,2-3.169A9.269,9.269,0,0,1,8.1,2.862a10.605,10.605,0,0,1,4.175-.787,10.516,10.516,0,0,1,4.334.827A8.437,8.437,0,0,1,19.64,5.119a8.622,8.622,0,0,1,1.707,3.1,9.263,9.263,0,0,1,.377,3.487,5.809,5.809,0,0,1-1.3,3.6A3.6,3.6,0,0,1,17.7,16.473a3.628,3.628,0,0,1-2.162-.609,2.82,2.82,0,0,1-1.119-1.694l.5.106a2.582,2.582,0,0,1-1.3,1.3A4.37,4.37,0,0,1,11.746,16,3.681,3.681,0,0,1,9.88,15.54a3.2,3.2,0,0,1-1.237-1.271A3.843,3.843,0,0,1,8.2,12.4a3.88,3.88,0,0,1,.456-1.926A3.191,3.191,0,0,1,9.919,9.214a3.792,3.792,0,0,1,1.853-.443,4.716,4.716,0,0,1,1.767.364,2.622,2.622,0,0,1,1.383,1.3l-.5.5V9.461a.4.4,0,0,1,.4-.4h.232a.4.4,0,0,1,.4.4v3.518a2.723,2.723,0,0,0,.529,1.674,2.173,2.173,0,0,0,1.853.708,2.281,2.281,0,0,0,1.323-.41,2.938,2.938,0,0,0,.967-1.178,4.947,4.947,0,0,0,.437-1.852,9.439,9.439,0,0,0-.417-3.574A7.285,7.285,0,0,0,18.5,5.588a7.424,7.424,0,0,0-2.679-1.78,9.605,9.605,0,0,0-3.547-.622,9.041,9.041,0,0,0-3.758.741,8.252,8.252,0,0,0-2.773,2,8.8,8.8,0,0,0-1.72,2.838,9.27,9.27,0,0,0-.589,3.262,8.568,8.568,0,0,0,.682,3.408A8.951,8.951,0,0,0,6,18.24a8.707,8.707,0,0,0,2.785,1.892,8.515,8.515,0,0,0,3.389.682,9.851,9.851,0,0,0,2.679-.378,8.451,8.451,0,0,0,2-.831.4.4,0,0,1,.553.158l.1.192a.4.4,0,0,1-.141.526,9.832,9.832,0,0,1-2.391,1.04A10.5,10.5,0,0,1,12.09,21.925ZM11.8,14.859a2.469,2.469,0,0,0,1.786-.649,2.427,2.427,0,0,0,.675-1.839,2.414,2.414,0,0,0-.7-1.886A2.532,2.532,0,0,0,11.8,9.856a2.482,2.482,0,0,0-1.839.649,2.523,2.523,0,0,0-.65,1.866,2.4,2.4,0,0,0,.682,1.865A2.574,2.574,0,0,0,11.8,14.859Z"></path> </g></svg>
                  Brands
                </div>
                <a class="font-base underline text-xl" href="/shop?brand=Nike&type=Kids" data-sveltekit-reload>Nike</a>
                <a class="font-base underline text-xl" href="/shop?brand=Adidas&type=Kids" data-sveltekit-reload>Adidas</a>
                <a class="font-base underline text-xl" href="/shop?brand=Puma&type=Kids" data-sveltekit-reload>Puma</a>
                <a class="font-base underline text-xl" href="/shop?brand=Under%20Armour&type=Kids" data-sveltekit-reload>Under Armour</a>
              </div>
              <div class="grid grid-cols-1 p-2">
                <div class="font-semibold text-4xl flex">
                  <svg fill="#000000" class="h-8 mb-3 mr-3 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepoEditor" data-name="Box List"> <path d="M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"></path> <path d="M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"></path> <path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path> <path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"></path> </g></svg>                  Collections
                </div>
                <a class="font-base underline text-xl" href="/shop?brand=Nike&type=Kids" data-sveltekit-reload>Nike</a>
                <a class="font-base underline text-xl" href="/shop?brand=Adidas&type=Kids" data-sveltekit-reload>Adidas</a>
                <a class="font-base underline text-xl" href="/shop?brand=Puma&type=Kids" data-sveltekit-reload>Puma</a>
                <a class="font-base underline text-xl" href="/shop?brand=Under%20Armour&type=Kids" data-sveltekit-reload>Under Armour</a>
              </div>
            </div>
          </div>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        <AutoComplete items="{namearr}" bind:selectedItem="{selectedproduct}" placeholder="Search" class="rounded-lg w-full h-auto p-2 bg-slate-200 hidden md:flex" hideArrow="true" />
        <a tabindex="0" class="btn btn-ghost btn-circle mr-4 hidden md:flex" on:click={search} data-sveltekit-reload href={"/product/" + productid}>
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-search" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="15" cy="15" r="4" /> <path d="M18.5 18.5l2.5 2.5" /> <path d="M4 6h16" /> <path d="M4 12h4" /> <path d="M4 18h4" /> </svg>
          </div>
        </a>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle mr-4">
            <div class="indicator">
              <svg fill="#000000" version="1.1" width="25" height="25" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_25_" d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929 c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212 c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869 c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869 c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648 C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777 c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60 c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704 C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0 C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499 c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459 c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212 c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661 C438.744,208.616,438.744,151.275,404.169,116.034z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g></svg>
              <span class="badge badge-sm bg-blue-900 indicator-item rounded-lg">{fav_num}</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">{fav_num} Items</span>
              {#each fav_products as product}
                <div class="flex">
                  <a href="/product/{product[0].id}" data-sveltekit-reload class="transition ease-in-out delay-15 duration-300">
                      <div class="text-md">
                        <h2 class="">{product[0].name}</h2>
                        <div class="badge bg-blue-700 border-0">{product[0].category}</div>
                        <div class="badge badge-secondary">£{product[0].price}</div>
                      </div>
                  </a>
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <a on:click={removeFavourite(product[0].id)} data-sveltekit-reload href="javascript:window.location.href=window.location.href" class="m-auto">
                    <svg class="h-5 w-5" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z"></path></g></svg>
                  </a>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <label tabindex="0" class="btn btn-ghost btn-circle mr-4">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <span class="badge badge-sm bg-blue-900 indicator-item rounded-lg">{cart_num}</span>
              </div>
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow p-6">
              <span class="font-bold text-lg">{cart_num} Items</span>
              <span class="text-info">Subtotal: £{cart_total}</span>
              {#each cart_products as product}
                <div class="flex">
                  <a href="/product/{product[0].id}" data-sveltekit-reload class="transition ease-in-out delay-15 duration-300 py-2">
                    <div class="text-md">
                      <h2 class="">{product[0].name}</h2>
                      <div class="badge bg-blue-700 border-0">{product[0].category}</div>
                      <div class="badge badge-secondary">£{product[0].price}</div>
                    </div>
                  </a>
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <a on:click={removeCart(product[0].id)} data-sveltekit-reload href="javascript:window.location.href=window.location.href" class="m-auto">
                    <svg class="h-5 w-5" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z"></path></g></svg>
                  </a>
                </div>
            {/each}
            <div class="card-actions py-2">
                <a href="/cart"><button class="btn btn-block bg-gradient-to-r from-blue-500 to-blue-900 border-0">View cart</button></a>
            </div>
            </div>
          </div>
    </div>
</div>

<slot />

<footer class="footer p-10 bg-neutral text-neutral-content bg-gradient-to-r from-blue-500 to-blue-900 ">
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 ">
    <div class="col-span-1 m-auto p-2">
      <a class="btn btn-ghost font-extrabold text-transparent text-4xl bg-clip-text bg-white" href="/">Spoura</a>
    </div>
    <div class="col-span-2 m-auto p-2">
      <span class="footer-title">Brands</span>
      <br /> 
      <a class="link link-hover p-4" href="/nike">Nike</a>
      <a class="link link-hover p-4" href="/adidas">Adidas</a>
      <a class="link link-hover p-4" href="/puma">Puma</a>
      <a class="link link-hover p-4" href="/under-armour">Under Armour</a>
    </div> 
    <div class="col-span-2 m-auto p-2">
      <span class="footer-title">Navigation</span>
      <br />
      <a class="link link-hover p-4" href="/all">All Products</a>
      <a class="link link-hover p-4" href="/about">About</a>
      <a class="link link-hover p-4" href="/contact">Contact</a>
    </div> 
    <div class="col-span-2 m-auto p-2">
      <span class="footer-title">Matthew Harvey</span> 
      <br />
      <a class="link link-hover p-4" href="https://github.com/Matthew-Harvey" target="_blank" rel="noreferrer">Github</a>
      <a class="link link-hover p-4" href="https://mharvey.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
      <a class="link link-hover p-4" href="https://www.linkedin.com/in/m-harvey/" target="_blank" rel="noreferrer">Linkedin</a>
    </div>
  </div> 
</footer>