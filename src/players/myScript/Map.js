import preGeneratedSceneryMap from "./utils/preGeneratedSceneryMap.js";

class Map {
  constructor(scenery) {
    this.scenery = scenery;
    this.colsQtd = scenery.length;
    this.rowsQtd = scenery[0].length;
  }

  getSceneryLinesMap() {
    return [
      ...this.getHorizontalLinesMap(),
      ...this.getVerticalLinesMap(),
      ...this.getFirstDiagonalLinesMap(),
      ...this.getSecondDiagonalLinesMap(),
    ];
  }

  getPreGeneratedLinesMap() {
    return preGeneratedSceneryMap;
  }

  getHorizontalLinesMap() {
    const colsSlice = this.scenery.slice(0, this.colsQtd - 3);

    const horizontalLinesMap = colsSlice.reduce((acc, rows, i) => {
      const rowLines = rows.map((row, j) => {
        return [
          [i, j],
          [i + 1, j],
          [i + 2, j],
          [i + 3, j],
        ];
      });

      return [...acc, ...rowLines];
    }, []);

    return horizontalLinesMap;
  }

  getVerticalLinesMap() {
    const verticalLinesMap = this.scenery.reduce((acc, rows, i) => {
      const rowsSlice = rows.slice(0, this.rowsQtd - 3);

      const rowLines = rowsSlice.map((row, j) => {
        return [
          [i, j],
          [i, j + 1],
          [i, j + 2],
          [i, j + 3],
        ];
      });

      return [...acc, ...rowLines];
    }, []);

    return verticalLinesMap;
  }

  getFirstDiagonalLinesMap() {
    const colsSlice = this.scenery.slice(0, this.colsQtd - 3);

    const firstDiagonalsMap = colsSlice.reduce((acc, rows, i) => {
      const rowsSlice = rows.slice(3, this.rowsQtd);

      const firstDiagonalLines = rowsSlice.map((row, j) => {
        return [
          [i, j + 3],
          [i + 1, j + 2],
          [i + 2, j + 1],
          [i + 3, j],
        ];
      });

      return [...acc, ...firstDiagonalLines];
    }, []);

    return firstDiagonalsMap;
  }

  getSecondDiagonalLinesMap() {
    const colsSlice = this.scenery.slice(0, this.colsQtd - 3);

    const secondDiagonalsMap = colsSlice.reduce((acc, rows, i) => {
      const rowsSlice = rows.slice(3, this.rowsQtd);

      const secondDiagonalLines = rowsSlice.map((row, j) => {
        return [
          [this.colsQtd - 1 - i, j + 3],
          [this.colsQtd - 2 - i, j + 2],
          [this.colsQtd - 3 - i, j + 1],
          [this.colsQtd - 4 - i, j],
        ];
      });

      return [...acc, ...secondDiagonalLines];
    }, []);

    return secondDiagonalsMap;
  }
}

export default Map;
