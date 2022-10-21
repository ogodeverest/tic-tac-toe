<script lang="ts">
  import type Player from "@utils/Player";
  import marks from "@utils/marks";
  export let player: Player;
</script>

<svelte:component this={marks.get(player.mark)} {...$$props} />
