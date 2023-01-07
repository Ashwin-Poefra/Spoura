<script lang="ts">
    import type { PageData } from '../products/$types';
    export let data : PageData;
    const all = data.all;
    var showlist = JSON.parse(all);
    // @ts-ignore
    import AutoComplete from "simple-svelte-autocomplete";
    import { page } from '$app/stores';
    let sort_arr = ["All", "Latest", "Trending"] as const;
    let sort_select: string | null = $page.url.searchParams.get('sort');
    let brand_arr = ["Nike", "Adidas", "Puma", "Under Armour"] as const;
    let brand_select: string | null = $page.url.searchParams.get('brand');
    let type_arr = ["Mens", "Womens", "Kids"] as const;
    let type_select: string | null = $page.url.searchParams.get('type');
    async function typeChange() {
        console.log(type_select);
    }
    async function sortChange() {
        console.log(sort_select);
    }
    async function brandChange() {
        console.log(brand_select);
    }
</script>

{#if all}
    <div class="grid">
        <div class="lg:grid lg:fixed justify-center m-auto items-stretch max-w-7xl min-w-full bg-white sticky">
            <div class="grid grid-cols-1 md:grid-cols-3 p-2">
                <div id="type" class="p-2">
                    <AutoComplete onChange={typeChange} items="{type_arr}" bind:selectedItem="{type_select}" placeholder="Type" class="rounded-lg h-auto p-2 bg-slate-200 w-80" />
                </div>
                <div id="sort" class="p-2">
                    <AutoComplete onChange={sortChange} items="{sort_arr}" bind:selectedItem="{sort_select}" placeholder="Sort" class="rounded-lg h-auto p-2 bg-slate-200 w-80" />
                </div>
                <div id="brand" class="p-2">
                    <AutoComplete onChange={brandChange} items="{brand_arr}" bind:selectedItem="{brand_select}" placeholder="Brand" class="rounded-lg h-auto p-2 bg-slate-200 w-80" />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center m-auto items-stretch mt-10 max-w-7xl">
            {#each showlist as product}
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
