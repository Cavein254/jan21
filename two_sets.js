function twoSets(arr) {
  //Get the largest and smallest integers
  min = arr[0] > arr[1] ? arr[1] : arr[0];
  console.log(min);
  //Get lcd
  while (true) {
    if (min % arr[0] === 0 && min % arr[1] === 0) {
      console.log(`The LCM of ${arr[0]} and ${arr[1]} is ${min}`);
      break;
    }
    min++;
  }
}

console.log(twoSets([36, 6]));
