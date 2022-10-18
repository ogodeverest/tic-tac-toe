<script lang="ts">
  import Turn from "./Turn.svelte";
  import { RestartMark, Button, PlayersMarks } from "../../components";
  import RestartConfirm from "./modals/RestartConfirm.svelte";
  let show = false;

  function handleToggleConfirm() {
    show = !show;
  }
</script>

<RestartConfirm {show} on:toggleConfirm={handleToggleConfirm} />
<header class="header">
  <PlayersMarks />
  <Turn />
  <Button
    theme="neutral"
    style="justify-self: end;
           padding: 0.8em;
           aspect-ratio: 1;"
    on:click={handleToggleConfirm}
  >
    <RestartMark size="1.2em" theme="body" />
  </Button>
</header>

<style lang="scss">
  @import "../../scss/mixins";
  .header {
    @include main-grid;
    height: 2.4em;
  }
</style>
