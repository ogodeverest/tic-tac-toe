<script lang="ts">
</script>

<button class="tile" />

<style lang="scss">
  @import "../scss/mixins";
  .tile {
    @include tile(var(--clr-tile));
    @include key-button(var(--clr-tile-darker), 7px);
  }
</style>
