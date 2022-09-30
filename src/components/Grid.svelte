<script lang="ts">
  import Tile from "./Tile.svelte";
</script>

<section class="grid">
  <Tile />
  <Tile />
  <Tile />
  <Tile />
  <Tile />
  <Tile />
  <Tile />
  <Tile />
  <Tile />
</section>

<style lang="scss">
  @import "../scss/mixins";
  .grid {
    @include main-grid;
  }
</style>
