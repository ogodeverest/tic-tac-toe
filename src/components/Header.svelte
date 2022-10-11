<script lang="ts">
  import TurnTile from "./Turn.svelte";
  import PlayersMarks from "./PlayersMarks.svelte";
  import Button from "./Button.svelte";
  import RestartMark from "./icons/RestartMark.svelte";
  import store from "../store";
</script>

<header class="header">
  <PlayersMarks />
  <TurnTile />
  <Button
    theme="neutral"
    style="justify-self: end;
           padding: 0.8em;
          aspect-ratio: 1;"
    on:click={store.restart}
  >
    <RestartMark size="1em" color="var(--clr-body)" />
  </Button>
</header>

<style lang="scss">
  @import "../scss/mixins";
  .header {
    @include main-grid;
    height: 2.4em;
  }
</style>
