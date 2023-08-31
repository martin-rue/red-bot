import { move, layMine, runRadar } from "./turns.js";
import { readRadar } from "./radar.js";

const state = {
  gridSize: 0,
  position: null,
  opponent: null,
  opponentUsedRadar: false,
  mineRemaining: 3,
  turn: 0,
  mines: [],
};

export const start = ({ radar }) => {
  const result = readRadar(radar);
  state.gridSize = result.gridSize;
  state.position = result.position;
};
//...
export const turn = ({ minesRemaining, opponentUsedRadar }) => {
  state.turn += 1;
  state.minesRemaining = minesRemaining;
  state.opponentUsedRadar = opponentUsedRadar;

  return move(state.position.x, state.position.y);
};

export const handleRadar = ({ radar }) => {
  const result = readRadar(radar);
  state.opponent = result.opponent;
  state.mines = result.mines;
};

export const stop = ({ result, turns }) => {
  console.log(`${result} after ${turns} turns`);
};
