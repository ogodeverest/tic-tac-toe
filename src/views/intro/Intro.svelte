<script lang="ts">
  import MarkSelect from "./mark-select/MarkSelect.svelte";
  import { Button, Marks } from "@components";
  import store from "@/store";
  import type { Mark, Players } from "@utils/Player";
  import Player from "@/utils/Player";
  import CPU from "@/utils/CPU";

  let selectedMark: Mark = "X";

  const players: Players = new Map();

  function handleNewPVP() {
    players.set("X", new Player("X"));
    players.set("O", new Player("O"));
    store.create(players);
  }

  function handleNewPVC() {
    const cpuMark: Mark = selectedMark === "X" ? "O" : "X";
    players.set(selectedMark, new Player(selectedMark));
    players.set(cpuMark, new CPU(cpuMark));
    store.create(players);
  }
</script>

<section class="intro">
  <Marks />

  <div class="intro__picker box bg-primary shadow-primary-darker">
    <h1 class="intro__heading clr-neutral fs-sm">Pick player 1's mark</h1>
    <MarkSelect bind:group={selectedMark} />
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
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5em;

    &__picker {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.5em;
    }

    &__hint {
      opacity: 0.5;
    }
  }
</style>
