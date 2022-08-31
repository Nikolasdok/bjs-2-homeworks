function compareArrays(arr1, arr2) {
  let result = arr1.every((i, j) => arr1.length === arr2.length && i === arr2[j]);

  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter((arr) => arr > 0).filter((arr) => arr % 3 === 0).map((arr) => arr * 10);

  return resultArr; 
}