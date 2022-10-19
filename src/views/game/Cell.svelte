<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Color } from "../../models/styleUtils";
  import Button from "../../components/Button.svelte";
  import store from "../../store";
  import type GameState from "../../utils/GameState";
  import type Player from "../../utils/Player";
  import type Position from "../../models/Position.inferface";
  import { CircleMark, CrossMark } from "../../components";

  export let player: Player;
  export let position: Position;
  let winnerCell: boolean = false;
  const size = "clamp(2.5rem,5vw,6rem)";
  let theme: Color;
  let cellTheme: Color;
  $: theme = winnerCell ? "body" : player?.theme;
  $: cellTheme = winnerCell ? player?.theme : "primary";

  const unsubscribe = store.subscribe((state: GameState) => {
    winnerCell = state?.winTrio?.some(
      ([y, x]) => y === position.y && x === position.x
    );
  });

  onDestroy(unsubscribe);
</script>

<Button
  on:click={() => store.mark(position)}
  disabled={!!player || $store.stalled || $store.finished}
  sound="grid"
  style="aspect-ratio:1;"
  theme={cellTheme}
>
  {#if player === $store.players.get("O")}
    <CircleMark {size} {theme} />
  {:else if player === $store.players.get("X")}
    <CrossMark {size} {theme} />
  {/if}
</Button>
