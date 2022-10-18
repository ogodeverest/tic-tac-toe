<script type="ts">
  import store from "../../store";
  import { CircleMark, CrossMark } from "../../components";
  const markSize: string = "1.1em";
</script>

<div class="turn box bg-primary clr-neutral shadow-primary-darker">
  {#if $store.current === $store.players.get("O")}
    <CircleMark size={markSize} theme="neutral" />
  {:else}
    <CrossMark size={markSize} theme="neutral" />
  {/if}
  <span class="fs-sm">turn</span>
</div>

<style lang="scss">
  .turn {
    grid-column: 2/3;
    padding-block: 0.5em;
    span {
      margin-left: 0.6em;
    }
  }
</style>
