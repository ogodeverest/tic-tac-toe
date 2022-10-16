<script lang="ts">
  import CircleMark from "./icons/CircleMark.svelte";
  import CrossMark from "./icons/CrossMark.svelte";
  import Button from "./Button.svelte";
  import store from "../store";
  import type Position from "../models/Position.inferface";

  const markSize = "clamp(2.5rem,5vw,6rem)";

  function handleClick(position: Position) {
    store.mark(position);
  }
</script>

<section class="grid">
  {#each $store.grid as row, y}
    {#each row as tile, x}
      <Button
        on:click={() => handleClick({ x, y })}
        disabled={!!tile || $store.stalled || $store.finished}
        sound="grid"
        style="aspect-ratio:1;"
      >
        {#if tile === $store.players.get("O")}
          <CircleMark size={markSize} theme="warm" />
        {:else if tile === $store.players.get("X")}
          <CrossMark size={markSize} theme="cold" />
        {/if}
      </Button>
    {/each}
  {/each}
</section>

<style lang="scss">
  @import "../scss/mixins";
  .grid {
    @include main-grid;
  }
</style>
