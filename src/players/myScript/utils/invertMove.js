const invertMove = (play) => {
  const map = {
    1: 0,
    0: 1,
  };

  return map[play];
};

export default invertMove;
