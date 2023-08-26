<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchTopArtists } from '$lib/api';

    interface Artist {
        _id: string;
        name: string;
        popularity: number;
        play_count: number;
        genres: string[];
    }

    export let artistsPromise: Promise<Artist[]> = fetchTopArtists();

    // onMount(async () => {
    //     artistsPromise = fetchTopArtists();
    // });

</script>

<h1>Artists</h1>

{#await artistsPromise then artists}
    {#each artists as artist}
        <p>{artist}</p>
    {/each}
{/await}

