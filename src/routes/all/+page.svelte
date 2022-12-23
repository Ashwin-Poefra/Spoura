<script lang="ts">
    // @ts-ignore
    import AutoComplete from "simple-svelte-autocomplete";

    /** @type {import('./$types').PageData} */
    export let data;
    const all = data.all;
    const parse_all = JSON.parse(all);
    let namearr: any[] = [];
    for(let i = 0; i < parse_all.length; i++) {
        let obj = parse_all[i];
        namearr.push(obj.name);
    }
    let selectedproduct: any;
</script>

{#if all}
<div class="hero backdrop-brightness-50 bg-fixed bg-center bg-cover" style='background-image: url("/allshoes.webp"); min-height: 30vh'>
    <div class="hero-overlay bg-opacity-40 bg-blend-darken"></div>
    <div class="hero-content grid grid-cols-1 lg:flex-row-reverse">
        <h1 class="font-bold text-white text-8xl">All Products</h1>
        <AutoComplete items="{namearr}" bind:selectedItem="{selectedproduct}" placeholder="Search" class="rounded-lg w-full h-auto p-2" />
    </div>
</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:p-14 m-auto max-w-7xl items-stretch">
        {#each JSON.parse(all) as product}
            <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover -z-10" style='background-image: url({product.imgurl.main});'>
                    <div class="card-body pb-36">
                        <h2 class="card-title">{product.name}</h2>
                        <div class="badge bg-blue-700 border-0">{product.category}</div>
                        <div class="badge badge-secondary">£{product.price}</div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
{:else}
	<p>Error retrieving products.</p>
{/if}