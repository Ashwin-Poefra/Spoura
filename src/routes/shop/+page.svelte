<script lang="ts">
    import type { PageData } from '../products/$types';
    export let data : PageData;
    const all = data.all;
    // @ts-ignore
    import AutoComplete from "simple-svelte-autocomplete";
    let sort_arr = ["All", "Latest", "Trending"] as const;
    let sort_select: string;
    let brand_arr = ["Nike", "Adidas", "Puma", "Under Armour"] as const;
    let brand_select: string;
    let type_arr = ["Nike", "Adidas", "Puma", "Under Armour"] as const;
    let type_select: string;
</script>

{#if all}
    <div class="grid">
        <div class="lg:grid lg:fixed justify-center m-auto items-stretch max-w-7xl min-w-full bg-white sticky">
            <div class="grid grid-cols-3 p-2">
                <div id="type" class="p-2">
                    <AutoComplete items="{type_arr}" bind:selectedItem="{type_select}" placeholder="Type" class="rounded-lg h-auto p-2 bg-slate-200 w-72" />
                </div>
                <div id="sort" class="p-2">
                    <AutoComplete items="{sort_arr}" bind:selectedItem="{sort_select}" placeholder="Sort" class="rounded-lg h-auto p-2 bg-slate-200 w-72" />
                </div>
                <div id="brand" class="p-2">
                    <AutoComplete items="{brand_arr}" bind:selectedItem="{brand_select}" placeholder="Brand" class="rounded-lg h-auto p-2 bg-slate-200 w-72" />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center m-auto items-stretch mt-10 max-w-7xl">
            {#each JSON.parse(all) as product}
                    <div class="my-6">
                        <a href="/product/{product.id}" class="m-auto">
                            <div class="card h-60 w-72 bg-center bg-cover -z-10" style='background-image: url({product.imgurl.main});'>
                                <div class="card-body pb-36">
                                    <h2 class="card-title">{product.name}</h2>
                                    <div class="badge bg-blue-700 border-0">{product.category}</div>
                                    <div class="badge badge-secondary">£{product.price}</div>
                                </div>
                            </div>
                        </a>
                    </div>
            {/each}
        </div>
    </div>
{:else}
	<p>Error retrieving products.</p>
{/if}
