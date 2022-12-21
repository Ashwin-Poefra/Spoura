<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const product = data.product;
    console.log(product);
</script>

{#if product}
    <div class="p-6 m-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl">
        <img src={product.imgurl.main} alt={product.name} class="w-96 m-auto ring-2 ring-blue-500 rounded-lg">
        <div>
            <h1 class="text-4xl font-semibold pb-4">{product.name}</h1>
            <div class="badge bg-blue-700 text-lg border-0 p-4">{product.category}</div>
            <div class="badge badge-secondary text-lg p-4">£{product.price}</div>
        </div>
    </div>
{:else}
	<p>Not a valid product id.</p>
{/if}