function sort(array) {
  const length = array.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--)
    heapify(array, length, i);

  for (let i = length - 1; i > 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    heapify(array, i, 0);
  }
}

function heapify(array, heapSize, rootIndex) {
  var maxIndex = rootIndex;
  var left = 2 * rootIndex + 1;
  var right = 2 * rootIndex + 2;

  if (left < heapSize && array[left] > array[maxIndex]) maxIndex = left;
  if (right < heapSize && array[right] > array[maxIndex]) maxIndex = right;
  if (maxIndex != rootIndex) {
    var swap = array[rootIndex];
    array[rootIndex] = array[maxIndex];
    array[maxIndex] = swap;

    heapify(array, heapSize, maxIndex);
  }
}

var arr = [12, 123, 3, 23, -23, 3432, 12, 23];

console.log(arr);

sort(arr);

console.log(arr);
