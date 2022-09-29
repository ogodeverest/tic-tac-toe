<script lang="ts">
  import CircleIcon from "./components/CircleIcon.svelte";
  import CrossIcon from "./components/CrossIcon.svelte";
  import RestartIcon from "./components/RestartIcon.svelte";
</script>

<main>
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

  <section>
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
    <button class="tile" />
  </section>
  <footer />
</main>

<style lang="scss">
  @import "./scss/mixins";

  @mixin main-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 1.5rem;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-column: 2/3;
  }

  .header {
    @include main-grid;
    height: 2.4em;

    &__turn {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column: 2/3;
      padding-block: 0.5em;
      border-radius: 9px;
      background-color: var(--clr-tile);
      color: var(--clr-neutral);
      @include generate-shadow(var(--clr-tile-darker));
      span {
        font-size: 0.85rem;
        margin-left: 0.6em;
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: end;
      background-color: var(--clr-neutral);
      @include generate-shadow(var(--clr-neutral-darker));
      padding: 0.8em;
      aspect-ratio: 1;
      outline: 0;
      border: none;
      border-radius: 9px;
      cursor: pointer;

      &:active {
        @include generate-shadow(var(--clr-neutral-darker), 2px);
        transform: translateY(2px);
      }
    }
  }

  section {
    @include main-grid;
    .tile {
      outline: 0;
      border: none;
      background-color: var(--clr-tile);
      @include generate-shadow(var(--clr-tile-darker), 7px);
      border-radius: 9px;
      aspect-ratio: 1;

      cursor: pointer;
      &:active {
        @include generate-shadow(var(--clr-tile-darker), 4px);
        transform: translateY(5px);
      }
    }
  }
</style>
