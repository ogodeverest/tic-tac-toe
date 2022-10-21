<script lang="ts">
  import Circle from "./icons/Circle.svelte";
  import Cross from "./icons/Cross.svelte";
  import type Player from "@utils/Player";

  export let player: Player;

  const marks = new Map();
  marks.set("X", Cross);
  marks.set("O", Circle);
</script>

<svelte:component this={marks.get(player.mark)} {...$$props} />
