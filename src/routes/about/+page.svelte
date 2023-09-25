<script lang="ts">
    import type { PageServerData } from './$types';
    export let data : PageServerData;
    const all = data.all;
    $: filter_list = JSON.parse(all);
    $: all_list = JSON.parse(all);
    // @ts-ignore
    import AutoComplete from "simple-svelte-autocomplete";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    let sort_arr = ["Latest", "Trending", "Price Low->High", "Price High->Low"] as const;
    let sort_select: string | null = $page.url.searchParams.get('sort');
    if (sort_select == null ){sort_select = "All";}
    let brand_arr = ["All", "Nike", "Adidas", "Puma", "Under Armour"] as const;
    let brand_select: string | null = $page.url.searchParams.get('brand');
    if (brand_select == null ){brand_select = "All";}
    let type_arr = ["All", "Mens", "Womens", "Kids"] as const;
    let type_select: string | null = $page.url.searchParams.get('type');
    if (type_select == null ){type_select = "All";}
    async function filterChange() {
        let showlist = [];
        for (let product in all_list) {
            if (brand_select != "All" && type_select != "All") {if (all_list[product].category == type_select && all_list[product].brand == brand_select){showlist.push(all_list[product]);}
            } else if (brand_select == "All" && type_select != "All") {if (all_list[product].category == type_select){showlist.push(all_list[product]);}
            } else if (brand_select != "All" && type_select == "All" ) {if (all_list[product].brand == brand_select){showlist.push(all_list[product]);}
            } else {showlist.push(all_list[product]);}
        }
        filter_list = showlist;
        if (sort_select == "Latest") {
            function sortLatest(a: any, b: any) {if (a.id === b.id) {return 0;}else {return (a.id - b.id) ? -1 : 1;}}
            filter_list = filter_list.sort(sortLatest);
        } else if (sort_select == "Price Low->High") {
            function sortPrice(a: any, b: any) {if (parseFloat(a.price) === parseFloat(b.price)) {return 0;}else {return (parseFloat(a.price) < parseFloat(b.price)) ? -1 : 1;}}
            filter_list = filter_list.sort(sortPrice);
        } else if (sort_select == "Price High->Low") {
            function sortPrice(a: any, b: any) {if (parseFloat(a.price) === parseFloat(b.price)) {return 0;}else {return (parseFloat(a.price) > parseFloat(b.price)) ? -1 : 1;}}
            filter_list = filter_list.sort(sortPrice);
        }
        filter_list = filter_list;

        let typecurrent: any = type_select;
        $page.url.searchParams.set('type', typecurrent);
        let sortcurrent: any = sort_select;
        $page.url.searchParams.set('sort', sortcurrent);
        let brandcurrent: any = brand_select;
        $page.url.searchParams.set('brand', brandcurrent);
        try {
            goto(`?${$page.url.searchParams.toString()}`);
        } catch {}
    }
</script>

{#if all}
    <div class="grid">
        <div class="lg:grid lg:fixed justify-center m-auto items-stretch max-w-7xl min-w-full bg-white sticky">
            <div class="grid grid-cols-1 md:grid-cols-3 p-2">
                <div id="type" class="p-2">
                    <AutoComplete onChange={filterChange} items="{type_arr}" bind:selectedItem="{type_select}" placeholder="Type" class="rounded-lg h-auto p-2 bg-slate-200 w-80" />
                </div>
                <div id="brand" class="p-2">
                    <AutoComplete onChange={filterChange} items="{brand_arr}" bind:selectedItem="{brand_select}" placeholder="Brand" class="rounded-lg h-auto p-2 bg-slate-200 w-80" />
                </div>
                <div id="sort" class="p-2">
                    <AutoComplete onChange={filterChange} items="{sort_arr}" bind:selectedItem="{sort_select}" placeholder="Sort" class="rounded-lg h-auto p-2 bg-slate-200 w-80" />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center m-auto items-stretch mt-10 max-w-7xl">
            {#each filter_list as product}
                    <div class="my-6">
                        <a href="/product/{product.id}" class="m-auto">
                            <div class="card h-72 w-80 bg-center bg-cover -z-10" style='background-image: url({product.imgurl});'>
                                <div class="card-body pb-40">
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
