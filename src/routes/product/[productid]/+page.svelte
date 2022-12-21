<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const product = data.product;
</script>

{#if product}
    <div class="p-6 m-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl">
        <img src={product.imgurl.main} alt={product.name} class="w-96 m-auto ring-2 ring-blue-500 rounded-lg">
        <div>
            <h1 class="text-4xl font-semibold pb-4">{product.name}</h1>
            <div class="badge bg-blue-700 text-lg border-0 p-4">{product.category}</div>
            <div class="badge badge-secondary text-lg p-4">£{product.price}</div>
            <div class="flex pt-4 pb-4">
                <div class="rating">
                    <input type="radio" name="rating-1" class="mask mask-star" disabled />
                    <input type="radio" name="rating-1" class="mask mask-star" checked disabled />
                    <input type="radio" name="rating-1" class="mask mask-star" disabled />
                    <input type="radio" name="rating-1" class="mask mask-star"disabled />
                    <input type="radio" name="rating-1" class="mask mask-star" disabled />
                </div>
                <div class="text-lg font-semibold">()</div>
            </div>
            <div class="grid w-[40rem] grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2">
                <div>
                    <input type="radio" name="option" id="1" class="peer hidden" checked />
                    <label for="1" class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">1</label>
                </div>
                <div>
                    <input type="radio" name="option" id="2" class="peer hidden" />
                    <label for="2" class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">2</label>
                </div>
                <div>
                    <input type="radio" name="option" id="3" class="peer hidden" />
                    <label for="3" class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">3</label>
                </div>
                <div>
                    <input type="radio" name="option" id="4" class="peer hidden" />
                    <label for="4" class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">4</label>
                </div>
            </div>
        </div>
    </div>
{:else}
	<p>Not a valid product id.</p>
{/if}