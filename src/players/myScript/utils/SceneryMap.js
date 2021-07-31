class SceneryMap {
  constructor(scenery) {
    this.scenery = scenery;
    this.colsQtd = scenery.length;
    this.rowsQtd = scenery[0].length;
  }

  getSceneryMap() {}

  getHorizontalLinesMap() {
    const colsSlice = this.scenery.slice(0, this.colsQtd - 3);

    const horizontalLinesMap = colsSlice.reduce((acc, rows, i) => {
      const rowLines = rows.map((row, j) => {
        return [
          [i, j],
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
          [i, j + 3],
        ];
      });

      return [...acc, ...rowLines];
    }, []);

    return verticalLinesMap;
  }

  getFirstDiagonalsMap() {
    const colsSlice = this.scenery.slice(0, this.colsQtd - 3);

    const firstDiagonalsMap = colsSlice.reduce((acc, rows, i) => {
      const rowsSlice = rows.slice(3, this.rowsQtd);

      const firstDiagonalLines = rowsSlice.map((row, j) => {
        return [
          [i, j + 3],
          [i + 3, j],
        ];
      });

      return [...acc, ...firstDiagonalLines];
    }, []);

    return firstDiagonalsMap;
  }

  getSecondDiagonalsMap() {
    const colsSlice = this.scenery.slice(0, this.colsQtd - 3);

    const secondDiagonalsMap = colsSlice.reduce((acc, rows, i) => {
      const rowsSlice = rows.slice(3, this.rowsQtd);

      const secondDiagonalLines = rowsSlice.map((row, j) => {
        return [
          [this.colsQtd - 1 - i, j + 3],
          [this.colsQtd - 4 - i, j],
        ];
      });

      return [...acc, ...secondDiagonalLines];
    }, []);

    return secondDiagonalsMap;
  }
}

export default SceneryMap;
