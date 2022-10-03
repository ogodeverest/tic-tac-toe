<script lang="ts">
  import CircleIcon from "./CircleIcon.svelte";
</script>

<button class="tile">
  <slot />
</button>

<style lang="scss">
  @import "../scss/mixins";
  .tile {
    @include tile(var(--clr-tile));
    @include key-button(var(--clr-tile-darker), 7px);
  }
</style>
