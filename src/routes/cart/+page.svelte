<h1 class="bg-slate-200 font-bold underline text-4xl p-5 m-auto text-center">Welcome to Spoura - CART</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
    let id: number;
    let name: string;
    let email: string;
    let profileViews: number;
    let role: "USER" | "ADMIN";
    let purchase: JSON;
    let isGetting: boolean;
</script>