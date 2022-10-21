<script lang="ts">
  import MarkRadio from "./MarkRadio.svelte";
  import type Player from "@utils/Player";
  import type { Players } from "@utils/Player";

  export let group: Player;
  export let players: Players;
</script>

<div class="mark-select box bg-body">
  <MarkRadio value={players.get("X")} bind:group />
  <MarkRadio value={players.get("O")} bind:group />
</div>

<style lang="scss">
  .mark-select {
    width: 100%;
    height: 4em;
    padding: 0.3em;
    margin-block: 1em;
  }
</style>
