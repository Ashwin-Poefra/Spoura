<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const product = data.product;
    console.log(product);
</script>

{#if product}
    <div class="p-10 text-center text-3xl m-auto">
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <img src={"/" + product.imgurl.main} alt={product.name} class="w-60 m-auto">
    </div>
{:else}
	<p>Not a valid product id.</p>
{/if}