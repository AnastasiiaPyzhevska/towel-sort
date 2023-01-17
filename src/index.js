
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArrReverse = []
  for ( let i in matrix ) {
    if (i%2 !== 0) {
     newArrReverse.push(...matrix[i].reverse());
    } else {
      newArrReverse.push(...matrix[i]);
    }
  }
  return newArrReverse;
}
