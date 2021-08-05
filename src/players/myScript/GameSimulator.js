import Board from "./Board.js";
import invertMove from "./utils/invertMove.js";

class GameSimulator {
  constructor(scenery) {
    this.board = new Board(scenery);
    this.scenery = scenery;
  }

  isColFull(col) {
    return col.every((row) => row !== undefined);
  }

  willCauseLost(curMove, col, scenery) {
    let playedScenery = this.board.copyScenery(scenery);
    playedScenery = this.play(col, curMove, playedScenery);

    const playedBoard = new Board(playedScenery);

    return playedBoard.hasAWinningCol(invertMove(curMove));
  }

  willCauseWin(curMove, colIndex, scenery) {
    let playedScenery = this.board.copyScenery(scenery);
    playedScenery = this.play(colIndex, curMove, playedScenery);

    const playedBoard = new Board(playedScenery);

    return playedBoard.isLost(invertMove(curMove));
  }

  getColToPlay(scenery, curMove) {
    let colToPlay;
    let isColFull = false;

    do {
      colToPlay = Math.floor(Math.random() * 8);

      isColFull = this.isColFull(scenery[colToPlay]);
    } while (this.isColFull(scenery[colToPlay]));

    return colToPlay;
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

    const gameData = {
      result: 0,
      plays: 0,
      points: 0,
    };

    do {
      curScenery = this.play(curColPlay, curMove, curScenery);
      board.setScenery(curScenery);

      if (board.isLost(invertMove(myMove))) {
        gameData.result = 3;
      }

      if (board.isDraw()) {
        gameData.result = 2;
      }

      if (board.isLost(myMove)) {
        gameData.result = 1;
      }

      curColPlay = this.getColToPlay(scenery, curMove);
      curMove = invertMove(curMove);

      gameData.plays++;
    } while (gameData.result === 0);

    return gameData;
  }
}

export default GameSimulator;
