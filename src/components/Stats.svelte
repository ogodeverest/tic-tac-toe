<script lang="ts">
  import type GameState from "src/utils/GameState";
  import type { Mark } from "src/utils/Player";
  import store from "../store";
  import CPU from "../utils/CPU";

  function renderLabel(state: GameState, mark: Mark): string {
    if (state.players.get(mark) instanceof CPU) return "(CPU)";
    if (state.players.get(mark) === state.current) return "(YOU)";
    return "";
  }
</script>

<footer class="stats">
  <div class="stat stat--x">
    <p class="stat__key">
      X
      {renderLabel($store, "X")}
    </p>
    <span class="stat__number">
      {$store.players.get("X").wins}
    </span>
  </div>
  <div class="stat stat--ties">
    <p class="stat__key">Ties</p>
    <span class="stat__number">{$store.players.get("X").ties} </span>
  </div>
  <div class="stat stat--o">
    <p class="stat__key">
      O
      {renderLabel($store, "O")}
    </p>
    <span class="stat__number">
      {$store.players.get("O").wins}
    </span>
  </div>
</footer>

<style lang="scss">
  @import "../scss/mixins";
  .stats {
    @include main-grid;
    font-size: 0.85rem;
    font-weight: 400;

    .stat {
      @include box(var(--clr-default));
      flex-direction: column;
      padding: 0.5em 1em;

      &--x {
        background-color: var(--clr-cold);
      }

      &--ties {
        background-color: var(--clr-neutral);
      }
      &--o {
        background-color: var(--clr-warm);
      }

      &__number {
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }
</style>
