
function countOccurrences(numbersArray) {
 
  return numbersArray.reduce(function (prev, next) {
 
    if (prev[next] === undefined) {

      prev[next] = 1;
    } else {
    
      prev[next]++;
    }
    return prev; 
  }, {}); 
}


const inputArray = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5];
const resultObject = countOccurrences(inputArray);

console.log(resultObject);