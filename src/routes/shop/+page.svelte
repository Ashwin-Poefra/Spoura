<script lang="ts">
    import type { PageData } from '../products/$types';
    export let data : PageData;
    const all = data.all;
</script>

{#if all}
    <div class="grid grid-cols-1 lg:grid-cols-6 justify-center md:p-14 max-w-7xl items-stretch gap-4">
        <div class="col-span-2">
            <p>Shop Filters</p>
            <div class="form-control w-60">
                <label class="cursor-pointer label">
                  <span class="label-text pr-2">Mens</span>
                  <input type="checkbox" class="checkbox checkbox-info" />
                </label>
                <label class="cursor-pointer label">
                    <span class="label-text pr-2">Womens</span>
                    <input type="checkbox" class="checkbox checkbox-info" />
                  </label>
                  <label class="cursor-pointer label">
                    <span class="label-text pr-2">Kids</span>
                    <input type="checkbox" class="checkbox checkbox-info" />
                  </label>
            </div>
        </div>
        <div class="col-span-4">
            <div class="grid grid-cols-1 md:grid-cols-3 justify-center m-auto items-stretch">
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
    </div>
{:else}
	<p>Error retrieving products.</p>
{/if}