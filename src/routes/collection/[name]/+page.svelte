<script lang="ts">
    import type { Collection } from '../../../prismatypes';
    import type { PageServerData } from './$types';
    export let data: PageServerData;
    // @ts-ignore
    const collection: Collection = JSON.parse(data.collection);
</script>

{#if collection}
    <div class="hero backdrop-brightness-50 bg-fixed bg-center bg-cover" style='background-image: url("{collection.banner}"); min-height: 50vh'>
        <div class="hero-overlay bg-opacity-40 bg-blend-darken"></div>
        <div class="hero-content grid grid-cols-1 lg:flex-row-reverse">
            <h1 class="font-bold text-white text-8xl">{collection.name}</h1>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:p-14 m-auto max-w-7xl items-stretch">
        {#each collection.products as product}
            <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.imgurl});'>
                    <div class="card-body pb-40">
                        <h2 class="card-title">{product.name}</h2>
                        <div class="badge bg-blue-700 border-0">{product.category}</div>
                        <div class="badge badge-secondary">£{product.price}</div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
{:else}
	<p>Not a valid collection name.</p>
{/if}