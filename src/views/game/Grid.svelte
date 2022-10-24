<script lang="ts">
  import store from "@/store";
  import Cell from "./Cell.svelte";
</script>

<section class="main-grid">
  {#each $store.grid as row, y}
    {#each row as player, x}
      <Cell {player} position={{ y, x }} />
    {/each}
  {/each}
</section>
