import Board from "./Board.js";
import Game from "./Game.js";
import invertMove from "./utils/invertMove.js";
import quantityOfMovesInLine from "./utils/quantityOfMovesInLine.js";

class GameSimulator {
  constructor(scenery) {
    this.board = new Board(scenery);
    this.scenery = scenery;
  }

  play(curColIndex, curMove, curScenery) {
    const colToPlay = curScenery[curColIndex];

    let rowToPlay;

    rowToPlay = colToPlay.findIndex((row) => row !== undefined) - 1;

    if (rowToPlay < 0) rowToPlay = colToPlay.length - 1;

    curScenery[curColIndex][rowToPlay] = curMove;

    return curScenery;
  }

  simulateGame(scenery, myMove, firstColToPlay) {
    const board = new Board(scenery);
    let curScenery = board.copyScenery(scenery);
    let curMove = myMove;
    let curColPlay = firstColToPlay;

    // console.table(curScenery);

    const gameData = {
      result: 0,
      plays: 0,
      points: 0,
    };

    do {
      // console.table(board.scenery);
      curScenery = this.play(curColPlay, curMove, curScenery);
      board.setScenery(curScenery);
      // console.table(board.scenery);

      if (board.isLost(invertMove(myMove))) {
        gameData.result = 3;
      }

      if (board.isDraw()) {
        gameData.result = 2;
      }

      if (board.isLost(myMove)) {
        gameData.result = 1;
      }

      // console.log(gameData.result);

      curColPlay = Math.floor(Math.random() * 8);
      curMove = invertMove(curMove);

      // console.log(gameData.plays);
      gameData.plays++;
      // gameData.points;
    } while (gameData.result === 0);

    // gameData.points = (10 * gameData.result) / gameData.plays;

    // console.log(gameData.points);

    return gameData;
  }
}

export default GameSimulator;
