<script lang="ts">
  import { PlayerMark, Button } from "@components";
  import type GameState from "@utils/GameState";
  import type Player from "@utils/Player";
  import type Position from "@models/Position.inferface";
  import store from "@/store";

  export let player: Player;
  export let position: Position;

  function hasWon(state: GameState): boolean {
    return state.winTrio?.some(
      ([y, x]) => y === position.y && x === position.x
    );
  }
</script>

<Button
  on:click={() => store.mark(position)}
  disabled={!!player || $store.stalled || $store.finished}
  sound="grid"
  style="aspect-ratio:1;"
  theme={hasWon($store) ? player?.theme : "primary"}
>
  {#if player}
    <PlayerMark
      {...{
        player,
        size: "clamp(2.5rem,5vw,6rem)",
        theme: hasWon($store) ? "body" : player.theme,
      }}
    />
  {/if}
</Button>
