<script lang="ts">
  import CircleIcon from "./CircleIcon.svelte";
  import CrossIcon from "./CrossIcon.svelte";
  import RestartIcon from "./RestartIcon.svelte";
</script>

<header class="header">
  <div class="header__players">
    <CrossIcon size="1.8em" color="var(--clr-cold)" />
    <CircleIcon size="1.8em" color="var(--clr-warm)" />
  </div>

  <p class="header__turn">
    <CrossIcon size="1.1em" color="var(--clr-neutral)" />
    <span>turn</span>
  </p>

  <button class="header__button">
    <RestartIcon size="1em" color="var(--clr-body)" />
  </button>
</header>

<style lang="scss">
  @import "../scss/mixins";
  .header {
    @include main-grid;
    height: 2.4em;
    &__turn {
      grid-column: 2/3;
      padding-block: 0.5em;
      color: var(--clr-neutral);
      @include tile(var(--clr-tile));
      @include generate-shadow(var(--clr-tile-darker));
      span {
        font-size: 0.85rem;
        margin-left: 0.6em;
      }
    }

    &__button {
      justify-self: end;
      padding: 0.8em;
      @include tile(var(--clr-neutral));
      @include key-button(var(--clr-neutral-darker));
    }
  }
</style>
