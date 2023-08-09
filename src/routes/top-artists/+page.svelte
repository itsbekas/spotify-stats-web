<script lang="ts">
    import { onMount } from 'svelte';
    import { getTopArtists } from '$lib/api';

    interface Artist {
        _id: string;
        name: string;
        popularity: number;
        play_count: number;
        genres: string[];
    }

    export let artists: Artist[] | undefined;

    onMount(async () => {
        artists = await getTopArtists();
    });

</script>

<h1>Artists</h1>

{#if artists}
    {#each artists as artist}
        <p>{artist}</p>
    {/each}
{:else}
    <p>Loading...</p>
{/if}
