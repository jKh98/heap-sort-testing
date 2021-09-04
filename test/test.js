import assert from "assert";
import heapSort from "../main.js";

const nonArrayErrorMessage = "Cannot sort a non-array";
const nonNumericNonStringErrorMessage =
  "Cannot sort arrays of non-numeric or string values";
const noNaNErrorMessage = "Cannot sort arrays that include NaN";
const noStringNumberMixMessage =
  "Cannot sort arrays mixed of strings and numbers";

describe("heapSort", function () {
  it("should sort arrays of positives", function () {
    const unsorted = [5, 4, 3, 2, 1];
    const sorted = [1, 2, 3, 4, 5];

    assert.deepEqual(heapSort(unsorted), sorted);
  });

  it("should sort arrays of negatives", function () {
    const unsorted = [-1, -2, -3, -4, -5];
    const sorted = [-5, -4, -3, -2, -1];

    assert.deepEqual(heapSort(unsorted), sorted);
  });

  it("should sort arrays of signed numbers", function () {
    const unsorted = [12, -23, 11, 20, 0, -12];
    const sorted = [-23, -12, 0, 11, 12, 20];

    assert.deepEqual(heapSort(unsorted), sorted);
  });

  it("should sort arrays that start with zeros", function () {
    const unsorted = [0, 5, 4, 3, 2, 1];
    const sorted = [0, 1, 2, 3, 4, 5];

    assert.deepEqual(heapSort(unsorted), sorted);
  });

  it("should sort arrays that ends with zeros", function () {
    const unsorted = [5, 4, 3, 2, 1, 0];
    const sorted = [0, 1, 2, 3, 4, 5];

    assert.deepEqual(heapSort(unsorted), sorted);
  });

  it("should not mutate original array", function () {
    const original = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];

    const actual = heapSort(original);
    assert.deepEqual(actual, expected);
    assert.deepEqual(original, [5, 4, 3, 2, 1]);
  });

  it("should sort arrays of strings", function () {
    const unsorted = ["foo", "bar", "baz", "cux"];
    const sorted = ["bar", "baz", "cux", "foo"];

    assert.deepEqual(heapSort(unsorted), sorted);
  });

  it("should do nothing to arrays of zeros", function () {
    const zeros = Array(5).fill(0);
    assert.deepEqual(heapSort(zeros), zeros);
  });

  it("should do nothing to empty arrays", function () {
    assert.deepEqual(heapSort([]), []);
  });

  it("should do nothing to arrays one element", function () {
    assert.deepEqual(heapSort([1]), [1]);
  });

  it("should throw error when value passed is null", function () {
    assert.throws(() => heapSort(null), Error, nonArrayErrorMessage);
  });

  it("should throw error when value passed is undefined", function () {
    assert.throws(() => heapSort(undefined), Error, nonArrayErrorMessage);
  });

  it("should throw error when value passed is non-array", function () {
    assert.throws(() => heapSort("hello"), Error, nonArrayErrorMessage);
  });

  it("should throw error when array includes NaN", function () {
    assert.throws(() => heapSort([NaN, 12, 332]), Error, noNaNErrorMessage);
  });

  it("should throw error when array is mixed of numbers and strings", function () {
    assert.throws(
      () => heapSort(["foo", "bar", "baz", "cux", 5, 4, 3, 2, 1]),
      Error,
      noStringNumberMixMessage
    );
  });

  it("should throw error when array includes non-string or non-numeric elements", function () {
    const unsorted = [null, undefined, 0, 11, "23223", 123123, true];
    assert.throws(
      () => heapSort(unsorted),
      Error,
      nonNumericNonStringErrorMessage
    );
  });
});
