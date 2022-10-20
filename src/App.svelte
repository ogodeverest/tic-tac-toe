<script lang="ts">
  import { onMount } from "svelte";
  import Intro from "./views/intro/Intro.svelte";
  import Game from "./views/game/Game.svelte";
  import store from "./store";

  onMount(() => store.loadFromStorage());
</script>

<main>
  <svelte:component this={$store ? Game : Intro} />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-column: 2/3;
  }
</style>
