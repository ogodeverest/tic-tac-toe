<script lang="ts">
  import type GameState from "@utils/GameState";
  import type { Mark } from "@utils/Player";
  import store from "@/store";

  function renderLabel(state: GameState, mark: Mark): string {
    if (state.players.get(mark).cpu) return "(CPU)";
    if (state.players.get(mark) === state.current) return "(YOU)";
    return "";
  }
</script>

<footer class="stats main-grid fs-sm">
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
  .stats {
    .stat {
      flex-direction: column;
      padding: 0.5em 1em;
      &__number {
        font-size: 1.5em;
      }
    }
  }
</style>
