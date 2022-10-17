<script lang="ts">
  import MarkRadio from "./MarkRadio.svelte";
  import type { Mark } from "../utils/Player";

  export let group: Mark;
</script>

<div class="mark-select">
  <MarkRadio value="X" bind:group />
  <MarkRadio value="O" bind:group />
</div>

<style lang="scss">
  @import "../scss/mixins";

  .mark-select {
    width: 100%;
    @include box(var(--clr-body));
    height: 4em;
    padding: 0.3em;
    margin-block: 1em;
  }
</style>
