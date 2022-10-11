<script lang="ts">
  import Button from "./Button.svelte";
  import PlayersMarks from "./PlayersMarks.svelte";
  import store from "../store";
  import type { Mark, Players } from "../utils/Player";
  import Player from "../utils/Player";
  import CPU from "../utils/CPU";

  let selectedMark: Mark = "X";
  const players: Players = new Map();

  function handleNewPVP() {
    players.set("X", new Player("O"));
    players.set("O", new Player("X"));
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
  <PlayersMarks />
  <div class="picker">
    <label>
      Pick players 1 mark
      <input type="radio" name="mark" bind:group={selectedMark} value={"X"} />
      <input type="radio" name="mark" bind:group={selectedMark} value={"O"} />
    </label>
    <p class="picker__hint">Remember X goes first</p>
  </div>
  <Button theme="warm" style="width: 100%;" on:click={handleNewPVC}
    >New game (vs CPU)</Button
  >
  <Button theme="cold" style="width: 100%;" on:click={handleNewPVP}
    >New game (vs player)</Button
  >
</section>

<style lang="scss">
  @import "../scss/mixins";

  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5em;

    .picker {
      width: 100%;
      padding: 2em;
      @include box(var(--clr-primary));
    }

    :global(Button) {
    }
  }
</style>
