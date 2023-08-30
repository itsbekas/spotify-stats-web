<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchPlays } from '$lib/api';
    import { page } from '$app/stores'

    interface Play {
        _id: string;
        track: string;
        timestamp: string;
    }

    export let plays: Play[] = [];

    onMount(async () => {

        const start_date = $page.url.searchParams.get('start_date')
        const end_date = $page.url.searchParams.get('end_date')
        const limit = $page.url.searchParams.get('limit')

        plays = await fetchPlays(start_date ? start_date : "1970-01-01",
                                end_date ? end_date : "2070-01-01",
                                limit ? parseInt(limit) : 50);
        
    });

</script>

<h1>Plays</h1>

{#if plays.length > 0}
    {#each plays as play, index}
        <p>{index+1 + ". " + play.track + " (" + play.timestamp + ")"}</p>
    {/each}
{:else}
    <p>Loading...</p>
{/if}
