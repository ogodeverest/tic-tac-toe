<script lang="ts">
  import CircleIcon from "./CircleIcon.svelte";
  import CrossIcon from "./CrossIcon.svelte";
  import Tile from "./Tile.svelte";
</script>

<section class="grid">
  <Tile>
    <CircleIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-warm)" />
  </Tile>
  <Tile>
    <CrossIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-cold)" />
  </Tile>
  <Tile>
    <CircleIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-warm)" />
  </Tile>
  <Tile>
    <CircleIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-warm)" />
  </Tile>
  <Tile>
    <CrossIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-cold)" />
  </Tile>
  <Tile>
    <CircleIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-warm)" />
  </Tile>
  <Tile>
    <CircleIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-warm)" />
  </Tile>
  <Tile>
    <CrossIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-cold)" />
  </Tile>
  <Tile>
    <CircleIcon size="clamp(2.5rem,5vw,6rem)" color="var(--clr-warm)" />
  </Tile>
</section>

<style lang="scss">
  @import "../scss/mixins";
  .grid {
    @include main-grid;
  }
</style>
