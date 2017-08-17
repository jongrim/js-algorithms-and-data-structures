const assert = require('chai').assert;
const bubbleSort = require('../sorting/bubble_sort');
const insertionSort = require('../sorting/insertion_sort');

describe('Bubble sort', function() {
  it('should sort an array from least to greatest', function() {
    assert.deepEqual([2, 3, 4], bubbleSort([4, 3, 2]));
  });
});

describe('Insertion sort', function() {
  it('should sort an array from least to greatest', function() {
    assert.deepEqual([2, 3, 4], insertionSort([4, 3, 2]));
  });
});
