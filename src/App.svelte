<script lang="ts">
  import { onMount } from "svelte";
  import Intro from "./views/intro/Intro.svelte";
  import Game from "./views/game/Game.svelte";
  import store from "./store";

  onMount(() => store.loadFromStorage());
</script>

<main>
  {#if $store}
    <Game />
  {:else}
    <Intro />
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-column: 2/3;
  }
</style>
