<script type="ts">
  import store from "../../store";
  import { PlayerMark } from "../../components";
</script>

<div class="turn box bg-primary clr-neutral shadow-primary-darker">
  <PlayerMark player={$store.current} size="1.1em" theme="neutral" />
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
