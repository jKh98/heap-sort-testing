/**
 * Prototype method to mutate array by transforming to max heap
 *
 * @param {number} heapSize
 * @param {number} rootIndex
 */
Array.prototype.heapify = function (heapSize, rootIndex) {
  let maxIndex = rootIndex;
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;

  if (left < heapSize && this[left] > this[maxIndex]) maxIndex = left;
  if (right < heapSize && this[right] > this[maxIndex]) maxIndex = right;
  if (maxIndex != rootIndex) {
    [this[rootIndex], this[maxIndex]] = [this[maxIndex], this[rootIndex]];
    this.heapify(heapSize, maxIndex);
  }
};

/**
 * A pure function that sorts an array using the heapsort algorithim
 *
 * @param {Array} arr
 * @returns sorted version of array
 */
export default function heapSort(arr) {
  if (!Array.isArray(arr)) throw new Error("Cannot sort a non-array");

  const areAllNumbers = arr.every((el) => typeof el === "number");
  const areAllStrings = arr.every((el) => typeof el === "string");
  const hasNonStringNonNumeric = arr.some(
    (el) => typeof el !== "string" && typeof el !== "number"
  );

  if (hasNonStringNonNumeric)
    throw new Error("Cannot sort arrays of non-numeric or non-string values");

  if (!(areAllNumbers || areAllStrings))
    throw new Error("Cannot sort arrays mixed of strings and numbers");

  if (arr.some((el) => el != el))
    throw new Error("Cannot sort arrays that include NaN");

  const array = [...arr]; // Clone array to avoid mutating original
  const length = array.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--)
    array.heapify(length, i);

  for (let i = length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    array.heapify(i, 0);
  }

  return array;
}
