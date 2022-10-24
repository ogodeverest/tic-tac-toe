<script lang="ts">
  import { onMount } from "svelte";
  import Intro from "./views/intro/Intro.svelte";
  import Game from "./views/game/Game.svelte";
  import store from "./store";

  onMount(() => store.loadFromStorage());
</script>

<main class="flex-column">
  <svelte:component this={$store ? Game : Intro} />
</main>

<style lang="scss">
  main {
    gap: var(--default-gap);
    grid-column: 2/-2;
  }
</style>
