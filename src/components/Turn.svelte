<script type="ts">
  import store from "../store";
  import CircleMark from "./icons/CircleMark.svelte";
  import CrossMark from "./icons/CrossMark.svelte";

  const MarkColor: string = "var(--clr-neutral)";
  const MarkSize: string = "1.1em";
</script>

<div class="turn">
  {#if $store.current === $store.players.get("O")}
    <CircleMark size={MarkSize} color={MarkColor} />
  {:else}
    <CrossMark size={MarkSize} color={MarkColor} />
  {/if}
  <span>turn</span>
</div>

<style lang="scss">
  @import "../scss/mixins";
  .turn {
    grid-column: 2/3;
    padding-block: 0.5em;
    color: var(--clr-neutral);
    @include box(var(--clr-primary));
    @include generate-shadow(var(--clr-primary-darker));
    span {
      font-size: 0.85rem;
      margin-left: 0.6em;
    }
  }
</style>
