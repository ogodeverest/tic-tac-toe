<script lang="ts">
  import type GameState from "src/utils/GameState";
  import type { Mark } from "src/utils/Player";
  import store from "../../store";
  import CPU from "../../utils/CPU";

  function renderLabel(state: GameState, mark: Mark): string {
    if (state.players.get(mark) instanceof CPU) return "(CPU)";
    if (state.players.get(mark) === state.current) return "(YOU)";
    return "";
  }
</script>

<footer class="stats fs-sm">
  <div class="stat box bg-cold">
    <p class="stat__key">
      X
      {renderLabel($store, "X")}
    </p>
    <span class="stat__number fw-bold">
      {$store.players.get("X").wins}
    </span>
  </div>
  <div class="stat box bg-neutral">
    <p class="stat__key">Ties</p>
    <span class="stat__number">{$store.players.get("X").ties} </span>
  </div>
  <div class="stat box bg-warm">
    <p class="stat__key">
      O
      {renderLabel($store, "O")}
    </p>
    <span class="stat__number fw-bold">
      {$store.players.get("O").wins}
    </span>
  </div>
</footer>

<style lang="scss">
  @import "../../scss/mixins";
  .stats {
    @include main-grid;
    .stat {
      flex-direction: column;
      padding: 0.5em 1em;
      &__number {
        font-size: 1.5em;
      }
    }
  }
</style>
