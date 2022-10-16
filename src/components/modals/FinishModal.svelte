<script lang="ts">
  import { onDestroy } from "svelte";
  import Button from "../Button.svelte";
  import Dialog from "./Dialog.svelte";
  import CrossMark from "../icons/CrossMark.svelte";
  import CircleMark from "../icons/CircleMark.svelte";
  import store from "../../store";
  import playAudio from "../../utils/audioPlayer";
  import type GameState from "../../utils/GameState";

  const iconProps = {
    size: "1.3em",
    style: "margin-right:.5em",
  };

  const unsubscribe = store.subscribe((state: GameState) => {
    if (state?.finished) {
      if (state.winner) playAudio("win");
      else playAudio("tie");
    }
  });

  onDestroy(unsubscribe);
</script>

<Dialog show={$store?.finished}>
  <svelte:fragment slot="title">
    {#if $store.winner}
      You won!
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="content">
    <h2 class={`message message--${$store.winner?.theme || "neutral"}`}>
      {#if $store.winner === $store.players.get("X")}
        <CrossMark theme="cold" {...iconProps} />
      {:else if $store.winner === $store.players.get("O")}
        <CircleMark theme="warm" {...iconProps} />
      {/if}
      {$store.winner ? "Takes the round" : "Players tied"}
    </h2>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <Button theme="neutral" on:click={store.quit}>Quit</Button>
    <Button theme="warm" on:click={store.nextRound}>Next round</Button>
  </svelte:fragment>
</Dialog>

<style lang="scss">
  .message {
    margin-left: 0.5em;
    font-size: inherit;
    display: flex;
    align-items: center;

    &--cold {
      color: var(--clr-cold);
    }

    &--warm {
      color: var(--clr-warm);
    }

    &--neutral {
      color: var(--clr-neutral);
    }
  }
</style>
