function findEvenIndex(arr) {
    let left = 0;
    let right = arr.reduce((a,b) => a + b, 0) 
    
    for (let i = 0; i<arr.length; i++) {
      right -= arr[i];
      
      if (left === right) {
        return i;
      }
      left += arr[i]
    }
    return -1
  }
  
  
  console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // Output: 3
  console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // Output: 1
  console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // Output: 0