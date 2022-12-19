<script>
    let m_vis = true;
    let w_vis = false;
    let k_vis = false;
    function changeM () {m_vis = true; w_vis = false; k_vis = false;}
    function changeW () {m_vis = false; w_vis = true; k_vis = false;}
    function changeK () {m_vis = false; w_vis = false; k_vis = true;}
</script>

<!-- Hero -->
<div class="hero backdrop-brightness-50 bg-fixed bg-center bg-cover" style='background-image: url("/allshoes.webp"); min-height: 95vh'>
    <div class="hero-overlay bg-opacity-90 bg-blend-darken"></div>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 bg-white rounded-3xl shadow-md bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Spoura</em></h1>
            <p class="mb-5 text-3xl">Selling the best shoes by the biggest brands since 2013.</p>
            <button class="btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">All Products</button>
            <img class="absolute right-4 bottom-4 w-40 h-10" src="/puma_adidas_nike.webp" alt="Puma Adidas Nike" />
        </div>
        <img src="/banner-right-image.png" class="rounded-lg" alt="Hero Shoe" />
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
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-8 m-auto max-w-7xl items-stretch">
    <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
        <div class="card w-96 md:w-80 shadow-lg bg-center bg-cover ring-2 rounded-lg" style='background-image: url("adidas_supernova2_womens.webp");'>
            <div class="card-body pb-52">
                <h2 class="card-title">Adidas Supernova 2</h2>
                <div class="badge bg-blue-700 border-0">Womens</div>
                <div class="badge"><s>was £57.99</s></div>
                <div class="badge badge-secondary">NOW £37.99</div>
            </div>
        </div>
    </a>
    <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
        <div class="card w-96 md:w-80 shadow-lg bg-center bg-cover ring-2 rounded-lg" style='background-image: url("Nike_ReactInfinityFlyknit3_Mens.webp");'>
            <div class="card-body pb-52">
            <h2 class="card-title">Nike React Infinity Flyknit 3</h2>
            <div class="badge bg-blue-700 border-0">Mens</div>
            <div class="badge"><s>was £69.99</s></div>
            <div class="badge badge-secondary">NOW £49.99</div>
            </div>
        </div>
    </a>
    <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
        <div class="card w-96 md:w-80 shadow-lg bg-center bg-cover ring-2 rounded-lg" style='background-image: url("Asics_GT-Xpress_Mens.jpg");'>
            <div class="card-body pb-52">
            <h2 class="card-title">Asics GT-Xpress</h2>
            <div class="badge bg-blue-700 border-0">Mens</div>
            <div class="badge"><s>was £49.99</s></div>
            <div class="badge badge-secondary">NOW £34.99</div>
            </div>
        </div>
    </a>
    <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
        <div class="card w-96 md:w-80 shadow-lg bg-center bg-cover ring-2 rounded-lg" style='background-image: url("adidas_supernova2_womens.webp");'>
            <div class="card-body pb-52">
                <h2 class="card-title">Adidas Supernova 2</h2>
                <div class="badge bg-blue-700 border-0">Womens</div>
                <div class="badge"><s>was £57.99</s></div>
                <div class="badge badge-secondary">NOW £37.99</div>
            </div>
        </div>
    </a>
    <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
        <div class="card w-96 md:w-80 shadow-lg bg-center bg-cover ring-2 rounded-lg" style='background-image: url("Nike_ReactInfinityFlyknit3_Mens.webp");'>
            <div class="card-body pb-52">
            <h2 class="card-title">Nike React Infinity Flyknit 3</h2>
            <div class="badge bg-blue-700 border-0">Mens</div>
            <div class="badge"><s>was £69.99</s></div>
            <div class="badge badge-secondary">NOW £49.99</div>
            </div>
        </div>
    </a>
    <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
        <div class="card w-96 md:w-80 shadow-lg bg-center bg-cover ring-2 rounded-lg" style='background-image: url("Asics_GT-Xpress_Mens.jpg");'>
            <div class="card-body pb-52">
            <h2 class="card-title">Asics GT-Xpress</h2>
            <div class="badge bg-blue-700 border-0">Mens</div>
            <div class="badge"><s>was £49.99</s></div>
            <div class="badge badge-secondary">NOW £34.99</div>
            </div>
        </div>
    </a>
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
            <div id="mens" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style="transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1)">
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/t77497s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/u72886s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c21351s4.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/m86222s4.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/111088s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/455489s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
            </div>
        {/if}
        {#if w_vis}
            <div id="womens" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style="transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1)">
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/t77497s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/u72886s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c21351s4.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/m86222s4.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/111088s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/455489s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
            </div>
        {/if}
        {#if k_vis}
            <div id="kids" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style="transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1)">
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/t77497s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/u72886s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c21351s4.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/m86222s4.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/111088s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
                <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300">
                    <div class="card w-96 md:w-60 bg-base-100 shadow-lg bg-center bg-cover" style='background-image: url("https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/455489s3.jpg?im=Resize,width=364");'>
                        <div class="card-body pb-52">
                        <h2 class="card-title">Asics GT-Xpress</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge"><s>was £49.99</s></div>
                        <div class="badge badge-secondary">NOW £34.99</div>
                        </div>
                    </div>
                </a>
            </div>
        {/if}
    </div>
</section>

<!-- Newsletter -->
<div class="grid grid-cols-1 justify-center p-10 items-center m-auto bg-blue-400">
    <p class="text-center font-serif font-semibold text-3xl p-2 text-white">Want marketing updates ?</p>
    <input placeholder="Enter email" class="text-center max-w-2xl m-auto rounded-lg p-2 shadow-lg" />
</div>