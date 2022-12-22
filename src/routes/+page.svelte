<script lang="ts">
    let m_vis = true;
    let w_vis = false;
    let k_vis = false;
    function changeM () {m_vis = true; w_vis = false; k_vis = false;}
    function changeW () {m_vis = false; w_vis = true; k_vis = false;}
    function changeK () {m_vis = false; w_vis = false; k_vis = true;}
    /** @type {import('./$types').PageData} */
    export let data;
    const featured = data.featured;
    const trend_men = data.men;
    const trend_women = data.women;
    const trend_kids = data.kids;
</script>

<!-- Hero -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("/home_banner.jpg"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Spoura</em></h1>
            <p class="mb-5 text-3xl">Selling the best shoes by the biggest brands since 2013.</p>
            <button class="btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">All Products</button>
            <img class="absolute right-4 bottom-4 w-40 h-10" src="/brands.png" alt="Puma Adidas Nike" />
        </div>
        <div />
    </div>
</div>

<!-- Collections -->
<div class="grid grid-cols-2 items-center w-full h-full text-center justify-center">
    <div class="card-zoom">
        <div class="card-zoom-image bg-nike"></div>
        <h1 class="card-zoom-text">NIKE</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-adidas"></div>
      <h1 class="card-zoom-text">ADIDAS</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-puma"></div>
      <h1 class="card-zoom-text">PUMA</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-under"></div>
      <h1 class="card-zoom-text">UNDER ARMOUR</h1>
    </div>
</div>

<!-- Featured Sales -->
<h1 class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 text-center p-10 z-10">Featured</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:p-14 m-auto max-w-7xl items-stretch">
    {#each JSON.parse(featured) as product}
        <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
            <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.imgurl.main});'>
                <div class="card-body pb-36">
                    <h2 class="card-title">{product.name}</h2>
                    <div class="badge bg-blue-700 border-0">{product.category}</div>
                    <div class="badge badge-secondary">£{product.price}</div>
                </div>
            </div>
        </a>
    {/each}
</div>

<!-- Collections -->
<div class="grid grid-cols-1 md:grid-cols-2 justify-center pt-10 items-center m-auto">
    <div class="w-auto h-96 bg-cover bg-center" style='background-image: url("https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/reebok_enGB/Images/FW22_Cardi-B_December-Drop_Sustain_Teaser-Carousel_3_tcm265-965885.jpg")' alt="Reebok next-level" >
        <br />
    </div>
    <div class="w-auto h-96 bg-cover bg-center" style='background-image: url("https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/reebok_enGB/Images/22FW_Mountain-Research_FD_Teaser-Carousel-Card-Background_tcm265-971479.jpg")' alt="Reebok mountains">
        <br />
    </div>
</div>

<!-- Idea Search -->
<div class="mb-10 grid grid-cols-1 justify-center p-10 items-center m-auto bg-gradient-to-r from-pink-500 to-blue-700">
    <p class="text-center font-serif font-semibold text-3xl p-2 text-white">Have an idea?</p>
    <input placeholder="Search products" class="text-center max-w-2xl m-auto rounded-lg p-2 shadow-lg" />
</div>

<!-- Mens Womens Kids -->
<section class="grid grid-cols-1 lg:grid-cols-3 max-w-7xl rounded-lg justify-center p-10 items-center m-auto">
    <div class="p-6 m-auto rounded-lg text-center">
        <h1 class="mb-5 text-5xl font-bold">Trending</h1>
        <img src="/flame.png" alt="flame" class="w-20 m-auto pb-16" />
        <button on:click={changeM} class="px-6 py-2 my-2 btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">Mens</button><br />
        <button on:click={changeW} class="px-6 py-2 my-2 btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">Womens</button><br />
        <button on:click={changeK} class="px-6 py-2 my-2 btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">Kids</button><br />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="col-span-2 bg-white">
        {#if m_vis}
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center md:p-14 m-auto max-w-7xl items-stretch">
                {#each JSON.parse(trend_men) as product}
                    <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                        <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.imgurl.main});'>
                            <div class="card-body pb-36">
                                <h2 class="card-title">{product.name}</h2>
                                <div class="badge bg-blue-700 border-0">{product.category}</div>
                                <div class="badge badge-secondary">£{product.price}</div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
        {#if w_vis}
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center md:p-14 m-auto max-w-7xl items-stretch">
                {#each JSON.parse(trend_women) as product}
                    <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                        <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.imgurl.main});'>
                            <div class="card-body pb-36">
                                <h2 class="card-title">{product.name}</h2>
                                <div class="badge bg-blue-700 border-0">{product.category}</div>
                                <div class="badge badge-secondary">£{product.price}</div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
        {#if k_vis}
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center md:p-14 m-auto max-w-7xl items-stretch">
            {#each JSON.parse(trend_kids) as product}
                <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                    <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.imgurl.main});'>
                        <div class="card-body pb-36">
                            <h2 class="card-title">{product.name}</h2>
                            <div class="badge bg-blue-700 border-0">{product.category}</div>
                            <div class="badge badge-secondary">£{product.price}</div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
        {/if}
    </div>
</section>

<!-- Newsletter -->
<div class="grid grid-cols-1 justify-center p-10 items-center m-auto bg-blue-400">
    <p class="text-center font-serif font-semibold text-3xl p-2 text-white">Want marketing updates ?</p>
    <input placeholder="Enter email" class="text-center max-w-2xl m-auto rounded-lg p-2 shadow-lg" />
</div>