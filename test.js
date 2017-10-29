const assert = require('assert');
const longestConsecutiveLength = require('./src/index.js');

const array1 = [100, 4, 200, 1, 3, 2];
const array2 = [100, 4, 200, 150, 300, 2000];
const array3 = [100, 4, 200, 1, 3, 2, 7, 8, 9, 10, 11, 12];
const array4 = [5, 4, 3, 2, 1];

it('should return correct length of the longest sequence for array1', () => {
  assert.equal(longestConsecutiveLength(array1), 4);
});

it('should return 0 if the is no sequence with step 1', () => {
  assert.equal(longestConsecutiveLength(array2), 0);
});

it('should return correct length of the longest sequence for array3', () => {
  assert.equal(longestConsecutiveLength(array3), 6);
});

it('should return correct length of the longest sequence for array4', () => {
  assert.equal(longestConsecutiveLength(array4), 5);
});
