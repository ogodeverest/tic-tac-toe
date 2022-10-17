<script lang="ts">
  import Button from "./Button.svelte";
  import PlayersMarks from "./icons/PlayersMarks.svelte";
  import store from "../store";
  import type { Mark, Players } from "../utils/Player";
  import Player from "../utils/Player";
  import CPU from "../utils/CPU";
  import MarkSelect from "./MarkSelect.svelte";

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
  <PlayersMarks />

  <div class="intro__picker">
    <h1 class="intro__heading">Pick player 1's mark</h1>
    <MarkSelect bind:group={selectedMark} />
    <p class="intro__hint">Remember X goes first</p>
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

    &__picker {
      width: 100%;
      padding: 1.5em;
      @include box(var(--clr-primary));
      @include generate-shadow(var(--clr-primary-darker));
      display: flex;
      flex-direction: column;
    }

    &__heading,
    &__hint {
      font-size: 1rem;
      font-weight: 400;
      color: var(--clr-neutral);
    }

    &__hint {
      opacity: 0.5;
    }
  }
</style>
