

function selectionSort(arr) {

  // Copy the original array
  let copy = arr.slice()

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (copy.length !==0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minI;
    let min = copy[0];
    for (let i = 0; i < copy.length; i++) {
      let el = copy[i];
      if (el < min) {
        min = el;
        minI = i;
      }
    }

    // Save and remove the value at the min index
    copy.splice(minI, 1);

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;

  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minI;
    let min = arr[pointer] 
    for (let i = pointer; i < arr.length; i++) {
      let el = arr[i];
      if (el < min) {
        min = el;
        minI = i;
      };
    }

    // Save the min value
      //already, = min

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minI; i > pointer; i--) {
      arr[i] = arr[i-1];
    }

    // Put the min value at the divider
    arr[pointer] = min;

    // Increment the divider and repeat
    pointer++  
  }
}


module.exports = [selectionSort, selectionSortInPlace];
