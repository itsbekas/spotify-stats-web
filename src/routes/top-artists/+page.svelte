<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchTopArtists } from '$lib/api';
    import { page } from '$app/stores'

    interface Artist {
        _id: string;
        name: string;
        popularity: number;
        play_count: number;
        genres: string[];
    }

    export let artists: Artist[] = [];

    onMount(async () => {

        const limit = $page.url.searchParams.get('limit')

        artists = await fetchTopArtists(limit ? parseInt(limit) : 50);
        
    });

</script>

<h1>Artists</h1>

{#if artists.length > 0}
    {#each artists as artist, index}
        <p>{index+1 + ". " + artist.name + " (" + artist.play_count + " plays)"}</p>
    {/each}
{:else}
    <p>Loading...</p>
{/if}

