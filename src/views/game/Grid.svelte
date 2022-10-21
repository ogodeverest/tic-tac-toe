<script lang="ts">
  import store from "@/store";
  import Cell from "./Cell.svelte";
</script>

<section class="grid">
  {#each $store.grid as row, y}
    {#each row as player, x}
      <Cell {player} position={{ y, x }} />
    {/each}
  {/each}
</section>

<style lang="scss">
  @import "../../scss/mixins";
  .grid {
    @include main-grid;
  }
</style>
