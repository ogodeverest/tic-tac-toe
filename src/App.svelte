<script lang="ts">
  import Stats from "./components/Stats.svelte";
  import Grid from "./components/Grid.svelte";
  import Header from "./components/Header.svelte";
</script>

<main>
  <Header />
  <Grid />
  <Stats />
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
