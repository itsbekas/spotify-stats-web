<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchTopTracks } from '$lib/api';
    import { page } from '$app/stores'

    interface Track {
        _id: string;
        name: string;
        popularity: number;
        play_count: number;
        genres: string[];
    }

    export let tracks: Track[] = [];

    onMount(async () => {

        const limit = $page.url.searchParams.get('limit')
        
        tracks = await fetchTopTracks(limit ? parseInt(limit) : 50);

    });

</script>

<h1>Tracks</h1>

{#if tracks.length > 0}
    {#each tracks as track, index}
        <p>{index+1 + ". " + track.name + " (" + track.play_count + " plays)"}</p>
    {/each}
{:else}
    <p>Loading...</p>
{/if}
