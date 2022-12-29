<script lang="ts">
    import type { PageData } from './$types';
    export let data : PageData;
    const product = data.product;
    let imgsrc: string;
    try {
        // @ts-ignore
        imgsrc = product.imgurl.main;
    } catch {
        imgsrc = "";
    }
    let reviewcount: number = 200;
    let totalstars: number = 600;
    let stars: number = Math.round(totalstars / reviewcount);
    let sizes: Array<Number> = [1, 2, 3, 4];
    let count: number = 1;
    function increment () {if (count < 9) {count += 1}};
    function decrement () {if (count > 1) {count -= 1}};
    let isFavourite: boolean = false;
    function changeFavourite () {isFavourite = !isFavourite;};
    let collection: JSON = JSON.parse("{}");
    try { 
        collection = JSON.parse(product.collection);
    } catch {
        collection = JSON.parse("{}");
    }
    // @ts-ignore
    let col_name: string = collection.name;
    // @ts-ignore
    let col_url_slug: string = collection.url_slug;

    import Cookies from 'js-cookie';
    import { invalidateAll } from '$app/navigation';
    const addProduct = async () => {
        let original_cookie: any = "";
        if (Cookies.get("spoura_cart") != '') {
            original_cookie = Cookies.get("spoura_cart");
        }
        Cookies.set("spoura_cart", original_cookie + "//" + data.product.id);
        invalidateAll();
    }
</script>

{#if product}
    <div class="p-6 m-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl">
        <img src={imgsrc} alt={product.name} class="w-96 h-auto m-auto ring-2 ring-blue-500 rounded-lg">
        <div>
            <h1 class="text-4xl font-semibold pb-4">{product.name}</h1>
            <div class="badge bg-blue-700 text-lg border-0 p-4">{product.category}</div>
            <div class="badge badge-secondary text-lg p-4">£{product.price}</div>
            <div class="flex space-x-2 rounded-xl py-4 m-auto">
                <p>{product.description}</p>
            </div>
            {#if col_name != undefined}
                <p>Collection: <a class="hover:underline" href="/collection/{col_url_slug}">{col_name}</a></p>
            {:else}
                <p class="hidden">Collection: <u>{col_name}</u></p>
            {/if}
            <div class="flex pt-4 pb-4">
                <div class="rating">
                    {#each [1, 2, 3, 4, 5] as rating}
                        {#if rating == stars}
                            <input type="radio" name="rating-1" class="mask mask-star" checked disabled />
                        {:else}
                            <input type="radio" name="rating-1" class="mask mask-star" disabled />
                        {/if}
                    {/each}
                </div>
                <div class="text-lg font-semibold">({reviewcount})</div>
            </div>
            <p class="p-2">Size: </p>
            <div class="grid grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2 m-auto">
                {#each sizes as size}
                    <div>
                        <input type="radio" name="option" id={size.toString()} class="peer hidden" checked />
                        <label for={size.toString()} class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">{size}</label>
                    </div>
                {/each}
            </div>
            <p class="p-2">Quantity: </p>
            <div class="flex space-x-2 rounded-xl bg-gray-200 p-2 w-40 justify-center">
                <button class="w-4 p-2" on:click={decrement}>-</button>
                <span class="w-4 p-2">{count}</span>
                <button class="w-4 p-2" on:click={increment}>+</button>
            </div>
            <div class="flex space-x-2 rounded-xl p-2 m-auto">
                <a href="/product/{data.product.id}" data-sveltekit-reload><button class="btn bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-lg hover:scale-110 border-0 py-2 px-4 my-4" on:click={addProduct}>ADD TO CART</button></a>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <label tabindex="0" class="btn btn-ghost btn-circle mr-4 m-auto" on:click={changeFavourite}>
                    <div class="indicator">
                        {#if isFavourite == true}
                            <svg fill="#880808" version="1.1" width="25" height="25" id="favourite" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_25_" d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929 c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212 c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869 c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869 c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648 C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777 c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60 c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704 C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0 C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499 c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459 c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212 c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661 C438.744,208.616,438.744,151.275,404.169,116.034z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g></svg>
                        {:else}
                            <svg fill="#000000" version="1.1" width="25" height="25" id="favourite" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#000000" stroke-width="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_25_" d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929 c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212 c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869 c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869 c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648 C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777 c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60 c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704 C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0 C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499 c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459 c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212 c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661 C438.744,208.616,438.744,151.275,404.169,116.034z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g></svg>
                        {/if}
                    </div>
                </label>
            </div>
        </div>
    </div>
{:else}
	<p>Not a valid product id.</p>
{/if}