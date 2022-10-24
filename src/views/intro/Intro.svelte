<script lang="ts">
  import MarkSelect from "./mark-select/MarkSelect.svelte";
  import { Button, Marks } from "@components";
  import store from "@/store";
  import Player from "@utils/Player";
  import type { Players } from "@utils/Player";

  const players: Players = new Map();
  players.set("X", new Player("X"));
  players.set("O", new Player("O"));

  let selectedPlayer: Player = players.get("X");
  let opponent: Player;

  $: opponent =
    selectedPlayer === players.get("X") ? players.get("O") : players.get("X");

  function handleNewPVP() {
    store.create(players);
  }

  function handleNewPVC() {
    opponent.cpu = true;
    store.create(players);
  }
</script>

<section class="intro flex-column flex-center">
  <Marks />

  <div class="intro__picker box flex-column bg-primary shadow-primary-darker">
    <h1 class="intro__heading clr-neutral fs-sm">Pick player 1's mark</h1>
    <MarkSelect {players} bind:group={selectedPlayer} />
    <p class="intro__hint clr-neutral">Remember X goes first</p>
  </div>
  <Button theme="warm" style="width: 100%;" on:click={handleNewPVC}
    >New game (vs CPU)</Button
  >
  <Button theme="cold" style="width: 100%;" on:click={handleNewPVP}
    >New game (vs player)</Button
  >
</section>

<style lang="scss">
  .intro {
    gap: var(--default-gap);

    &__picker {
      width: 100%;
      padding: 1.5em;
    }
    &__hint {
      opacity: 0.5;
    }
  }
</style>
