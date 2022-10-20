import { writable } from "svelte/store";
import GameState from "./utils/GameState";
import type Position from "./models/Position.inferface";
import type { Players } from "./utils/Player";
import CPU from "./utils/CPU";

function saveGameState(gameState: GameState) {
  localStorage.setItem("gameState", gameState.toJSON());
}

function removeGameState() {
  localStorage.removeItem("gameState");
}

function createStore() {
  const { subscribe, set, update } = writable(null);

  function loadFromStorage() {
    const savedState = JSON.parse(localStorage.getItem("gameState"));
    if (savedState) {
      set(GameState.fromStorage(savedState));
    }
  }

  function create(players: Players) {
    const gameState: GameState = new GameState(players);
    set(gameState);
    saveGameState(gameState);
  }

  function mark(position: Position) {
    update((state: GameState) => {
      const nextState: GameState = state.mark(position);
      saveGameState(nextState);
      return nextState;
    });
  }

  function restart() {
    update((state: GameState) => {
      removeGameState();
      const nextState: GameState = state.restart();
      saveGameState(nextState);
      return nextState;
    });
  }

  function quit() {
    set(null);
    removeGameState();
  }

  function nextRound() {
    update((state: GameState) => {
      const nextState: GameState = state.newRound();
      saveGameState(nextState);
      return nextState;
    });
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
    quit,
    nextRound,
    loadFromStorage,
  };
}

const store = createStore();
export default store;
