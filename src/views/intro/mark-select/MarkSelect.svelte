<script lang="ts">
  import MarkRadio from "./MarkRadio.svelte";
  import type { Mark } from "@utils/Player";

  export let group: Mark;
</script>

<div class="mark-select box bg-body">
  <MarkRadio value="X" bind:group />
  <MarkRadio value="O" bind:group />
</div>

<style lang="scss">
  .mark-select {
    width: 100%;
    height: 4em;
    padding: 0.3em;
    margin-block: 1em;
  }
</style>
