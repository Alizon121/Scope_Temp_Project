/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const arrowMirrorArray = (array) => {
  let newArr = []
  let reverse = array.reverse();
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]);
    // newArr.push(array[i].reverse())

  }
  return 
}

console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
