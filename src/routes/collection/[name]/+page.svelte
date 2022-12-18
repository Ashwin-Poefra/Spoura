<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const collection = data.collection;
    console.log(collection);
</script>

{#if collection}
    <div class="p-10 text-center text-3xl m-auto">
        <h1>{collection.id}</h1>
        <h1>{collection.name}</h1>
    </div>
{:else}
	<p>Not a valid collection name.</p>
{/if}