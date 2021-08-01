const quantityOfMovesInLine = (line, move) => {
  return line.filter((cell) => cell === move).length;
};

export default quantityOfMovesInLine;
