let array = [12, 11, 13, 5, 6];
array = [3, 7, 1, 6, 5, 2];

function insertionSort(arr) {
  // n is the length of the array arr, which represents the number of elements to sort.
  let n = arr.length;
  //This loop starts from the second element (i = 1) and iterates up to the last element (i < n).
  for (let i = 1; i < n; i++) {
    //'current' stores the value of the element at index 'i'
    let current = arr[i];
    // j is initialized to i - 1, which is the index of the element just before current.
    let j = i - 1;
    // This loop continues as long as j is greater than or equal to 0 and the element at arr[j] is greater than current.
    while (j >= 0 && arr[j] > current) {
      // Shifts the element at j one position to the right to make space for current.
      arr[j + 1] = arr[j];
      //Decrements j to continue checking previous elements in the array.

      j--;
    }
    // Insert the current element into its correct position
    arr[j + 1] = current;
  }
  // Return the sorted array
  return arr;
}

console.log("Original Array: ", array);
console.log("Sorted Array: ", insertionSort(array));
