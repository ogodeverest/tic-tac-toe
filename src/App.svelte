<script lang="ts">
  import Stats from "./components/Stats.svelte";
  import Grid from "./components/Grid.svelte";
  import Header from "./components/Header.svelte";
  import Intro from "./components/Intro.svelte";
  import store from "./store";
</script>

<main>
  {#if $store}
    <Header />
    <Grid />
    <Stats />
  {:else}
    <Intro />
  {/if}
</main>

<style lang="scss">
  @import "./scss/mixins";

  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-column: 2/3;
  }
</style>
