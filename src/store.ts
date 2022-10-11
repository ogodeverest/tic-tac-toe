import { writable } from "svelte/store";
import GameState from "./utils/GameState";
import type Position from "./models/Position.inferface";
import type { Players } from "./utils/Player";
import CPU from "./utils/CPU";

function createStore() {
  const { subscribe, set, update } = writable(null);

  function create(players: Players) {
    localStorage.removeItem("gameState");
    set(new GameState(players));
  }
  function mark(position: Position) {
    update((state: GameState) => state.mark(position));
  }

  function restart() {
    localStorage.removeItem("gameState");
    update((state: GameState) => state.restart());
  }

  subscribe((state: GameState) => {
    if (state?.current instanceof CPU && !state?.finished) {
      state.current.move(state.grid).then((position) => mark(position));
    }
  });

  return {
    subscribe,
    mark,
    create,
    restart,
  };
}

const store = createStore();
export default store;
