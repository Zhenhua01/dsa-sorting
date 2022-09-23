function merge(arr1, arr2) {
  let newArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    newArr.push(...arr1.slice(i));
  }
  if (j < arr2.length) {
    newArr.push(...arr2.slice(j));
  }


  return newArr;

}

function mergeSort(arr) {
  // Split array into halves until you have arrays that have length of 0 or 1
  // Merge split arrays and return the merged & sorted array
  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);

  let arr1 = mergeSort(arr.slice(0, midpoint));
  let arr2 = mergeSort(arr.slice(midpoint));

  return merge(arr1, arr2);

}

module.exports = { merge, mergeSort };