<script lang="ts">
  import Turn from "./Turn.svelte";
  import RestartConfirm from "./modals/RestartConfirm.svelte";
  import Restart from "./Restart.svelte";
  import { Button, Marks } from "@components";

  let show = false;

  function handleToggleConfirm() {
    show = !show;
  }
</script>

<RestartConfirm {show} on:toggleConfirm={handleToggleConfirm} />
<header class="header">
  <Marks />
  <Turn />
  <Button
    theme="neutral"
    style="justify-self: end;
           padding: 0.8em;
           aspect-ratio: 1;"
    on:click={handleToggleConfirm}
  >
    <Restart />
  </Button>
</header>

<style lang="scss">
  @import "../../scss/mixins";
  .header {
    @include main-grid;
    height: 2.4em;
  }
</style>
