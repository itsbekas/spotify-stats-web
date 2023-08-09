<script>
    import { onMount } from 'svelte';
    import { getPlays } from '$lib/api';

    export let plays;
    export let error;

    onMount(async () => {
        try {
            plays = await getPlays("1970-01-01", "2024-01-01");
            error = null;
        } catch (err) {
            error = err.message || 'An error occurred.';
        }
    });
</script>

<h1>Plays</h1>

{#if error}
    <p>Error: {error}</p>
{:else if plays}
    {#each plays as play}
        <p>{play.name}</p>
    {/each}
{:else}
    <p>Loading...</p>
{/if}
