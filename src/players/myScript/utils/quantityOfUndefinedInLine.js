const quantityOfUndefinedInLine = (line) => {
  return line.filter((cell) => cell === undefined).length;
};

export default quantityOfUndefinedInLine;
