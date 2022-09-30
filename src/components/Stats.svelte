<script lang="ts">
</script>

<footer class="stats">
  <div class="stat stat--wins">
    <p class="stat__key">X (You)</p>
    <span class="stat__number"> 6 </span>
  </div>
  <div class="stat stat--ties">
    <p class="stat__key">Ties</p>
    <span class="stat__number">0</span>
  </div>
  <div class="stat stat--losses">
    <p class="stat__key">O (CPU)</p>
    <span class="stat__number">10</span>
  </div>
</footer>

<style lang="scss">
  @import "../scss/mixins";
  .stats {
    @include main-grid;
    font-size: 0.85rem;
    font-weight: 400;

    .stat {
      @include tile(var(--clr-warm));
      flex-direction: column;
      padding: 0.5em 1em;

      &--wins {
        background-color: var(--clr-cold);
      }

      &--ties {
        background-color: var(--clr-neutral);
      }
      &--loses {
        background-color: var(--clr-warm);
      }

      &__number {
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }
</style>
