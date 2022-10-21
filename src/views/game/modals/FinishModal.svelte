<script lang="ts">
  import { onDestroy } from "svelte";
  import Dialog from "./Dialog.svelte";
  import { Button, PlayerMark } from "@components";
  import playAudio from "@utils/audioPlayer";
  import store from "@/store";
  import type GameState from "@utils/GameState";

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
    <h2 class={`message clr-${$store.winner?.theme || "neutral"}`}>
      {#if $store.winner}
        <PlayerMark
          player={$store.winner}
          theme={$store.winner.theme}
          size="1.3em"
          style="margin-right:.5em"
        />
        Takes the round
      {:else}
        Players tied
      {/if}
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
  }
</style>
