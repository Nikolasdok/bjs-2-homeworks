
// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0; 
  let avg = 0;
  for (let i=0; i<arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i=0; i<arrOfArr.length; i++) {
    let result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let minimum = arr[0];
  let maximum = arr[0];
  let difference;
  for (let i=0; i<arr.length; i++) {
    if (minimum > arr[i]) {
      minimum = arr[i];
    }
    if (maximum < arr[i]) {
      maximum = arr[i];
    }
  }
  difference = (minimum - maximum);
  difference = Math.abs(difference);
  return difference;
}