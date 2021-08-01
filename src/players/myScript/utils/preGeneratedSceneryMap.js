const preGeneratedSceneryMap = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
  ],
  [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ],
  [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
  ],
  [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
  ],
  [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ],
  [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
  ],
  [
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
  ],
  [
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
  ],
  [
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
  ],
  [
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
  ],
  [
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
  [
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ],
  [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
  ],
  [
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
  ],
  [
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
  ],
  [
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
  ],
  [
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
  ],
  [
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
  ],
  [
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
  ],
  [
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
  ],
  [
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
  ],
  [
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
  ],
  [
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
  ],
  [
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
  ],
  [
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
  ],
  [
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
  ],
  [
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
  ],
  [
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  [
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
  ],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
  ],
  [
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  [
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
  [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  [
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
  ],
  [
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
  ],
  [
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
  ],
  [
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ],
  [
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
  ],
  [
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
  ],
  [
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
  ],
  [
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
  ],
  [
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
  ],
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
  ],
  [
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
  ],
  [
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
  ],
  [
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
  ],
  [
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
  ],
  [
    [0, 3],
    [1, 2],
    [2, 1],
    [3, 0],
  ],
  [
    [0, 4],
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  [
    [0, 5],
    [1, 4],
    [2, 3],
    [3, 2],
  ],
  [
    [1, 3],
    [2, 2],
    [3, 1],
    [4, 0],
  ],
  [
    [1, 4],
    [2, 3],
    [3, 2],
    [4, 1],
  ],
  [
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
  ],
  [
    [2, 3],
    [3, 2],
    [4, 1],
    [5, 0],
  ],
  [
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
  ],
  [
    [2, 5],
    [3, 4],
    [4, 3],
    [5, 2],
  ],
  [
    [3, 3],
    [4, 2],
    [5, 1],
    [6, 0],
  ],
  [
    [3, 4],
    [4, 3],
    [5, 2],
    [6, 1],
  ],
  [
    [3, 5],
    [4, 4],
    [5, 3],
    [6, 2],
  ],
  [
    [4, 3],
    [5, 2],
    [6, 1],
    [7, 0],
  ],
  [
    [4, 4],
    [5, 3],
    [6, 2],
    [7, 1],
  ],
  [
    [4, 5],
    [5, 4],
    [6, 3],
    [7, 2],
  ],
  [
    [7, 3],
    [6, 2],
    [5, 1],
    [4, 0],
  ],
  [
    [7, 4],
    [6, 3],
    [5, 2],
    [4, 1],
  ],
  [
    [7, 5],
    [6, 4],
    [5, 3],
    [4, 2],
  ],
  [
    [6, 3],
    [5, 2],
    [4, 1],
    [3, 0],
  ],
  [
    [6, 4],
    [5, 3],
    [4, 2],
    [3, 1],
  ],
  [
    [6, 5],
    [5, 4],
    [4, 3],
    [3, 2],
  ],
  [
    [5, 3],
    [4, 2],
    [3, 1],
    [2, 0],
  ],
  [
    [5, 4],
    [4, 3],
    [3, 2],
    [2, 1],
  ],
  [
    [5, 5],
    [4, 4],
    [3, 3],
    [2, 2],
  ],
  [
    [4, 3],
    [3, 2],
    [2, 1],
    [1, 0],
  ],
  [
    [4, 4],
    [3, 3],
    [2, 2],
    [1, 1],
  ],
  [
    [4, 5],
    [3, 4],
    [2, 3],
    [1, 2],
  ],
  [
    [3, 3],
    [2, 2],
    [1, 1],
    [0, 0],
  ],
  [
    [3, 4],
    [2, 3],
    [1, 2],
    [0, 1],
  ],
  [
    [3, 5],
    [2, 4],
    [1, 3],
    [0, 2],
  ],
];

export default preGeneratedSceneryMap;
