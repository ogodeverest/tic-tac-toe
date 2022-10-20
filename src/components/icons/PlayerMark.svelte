<script lang="ts">
  import type Player from "../../utils/Player";
  import CircleMark from "./CircleMark.svelte";
  import CrossMark from "./CrossMark.svelte";
  export let player: Player;
</script>

<svelte:component
  this={player.mark === "X" ? CircleMark : CrossMark}
  {...$$props}
/>
