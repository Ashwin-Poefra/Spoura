<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const collection = data.collection;
    const name = collection.name;
    const products = JSON.parse(collection.products);
    const banner = collection.banner;
    console.log(collection);
</script>

{#if collection}
<div class="hero backdrop-brightness-50 bg-fixed bg-center bg-cover" style='background-image: url("{banner}"); min-height: 50vh'>
    <div class="hero-overlay bg-opacity-40 bg-blend-darken"></div>
    <div class="hero-content grid grid-cols-1 lg:flex-row-reverse">
        <h1 class="font-bold text-white text-8xl">{name}</h1>
    </div>
</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-8 m-auto max-w-7xl items-stretch">
        {#each products as product}
            <a href="/products" class="transition ease-in-out delay-15 hover:scale-105 duration-300 p-10">
                <div class="card w-96 md:w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.imgurl.main});'>
                    <div class="card-body pb-32">
                        <h2 class="card-title">{product.name}</h2>
                        <div class="badge bg-blue-700 border-0">Mens</div>
                        <div class="badge badge-secondary">£{product.price}</div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
{:else}
	<p>Not a valid collection name.</p>
{/if}