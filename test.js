const assert = require('assert');
const longestConsecutiveLength = require('./src/index.js');

it('should check if empty array provided', () => {
    assert.equal(longestConsecutiveLength([]), "Empty array provided!");
});

it('should return correct length of the longest sequence from example', () => {
  assert.equal(longestConsecutiveLength([100, 4, 200, 1, 3, 2]), 4);
});

it('should return 0 if the is no sequence with step 1', () => {
  assert.equal(longestConsecutiveLength([100, 4, 200, 150, 300, 2000]), 0);
});

it('should return correct length of the longest sequence from example 2', () => {
  assert.equal(longestConsecutiveLength([100, 4, 200, 1, 3, 2, 7, 8, 9, 10, 11, 12]), 6);
});

it('should return correct length of the longest sequence from example 3', () => {
  assert.equal(longestConsecutiveLength([5, 4, 3, 2, 1]), 5);
});

it('should return correct length of the longest sequence 1', () => {
  assert.equal(longestConsecutiveLength([-1,0,1]), 3);
});

it('should return correct length of the longest sequence 2', () => {
  assert.equal(longestConsecutiveLength([0]), 0);
});

it('should return correct length of the longest sequence 3', () => {
  assert.equal(longestConsecutiveLength([0,1,2,3,4,-1]), 6);
});

it('should return correct length of the longest sequence 4', () => {
  assert.equal(longestConsecutiveLength([1,1,1,1,1]), 0);
});

it('should return correct length of the longest sequence 5', () => {
  assert.equal(longestConsecutiveLength([1,1,1,1,2]), 2);
});

it('should return correct length of the longest sequence 6', () => {
  assert.equal(longestConsecutiveLength([-1,1,1,1,1,2,0]), 4);
});

it('should return correct length of the longest sequence 7', () => {
  assert.equal(longestConsecutiveLength([-1,3,1,1,1,2,0]), 5);
});

it('should return correct length of the longest sequence 8', () => {
  assert.equal(longestConsecutiveLength([-1,3,1,1,1,2,0,5,6,7,8,9,10,11]), 7);
});

it('should return correct length of the longest sequence 9', () => {
  assert.equal(longestConsecutiveLength([12,-1,3,1,1,1,2,0,5,6,7,8,9,10,11]), 8);
});

it('should return correct length of the longest sequence 10', () => {
  assert.equal(longestConsecutiveLength([4,12,-1,3,1,1,1,2,0,5,6,7,8,9,10,11]), 14);
});

it('should return correct length of the longest sequence 11', () => {
  assert.equal(longestConsecutiveLength([-1,-2,-3]), 3);
});

it('should return correct length of the longest sequence 12', () => {
  assert.equal(longestConsecutiveLength([-1,-2,-3]), 3);
});

it('should return correct length of the longest sequence 13', () => {
  assert.equal(longestConsecutiveLength([1,3,5,7,8,2,4,6]), 8);
});

it('should return correct length of the longest sequence 14', () => {
  assert.equal(longestConsecutiveLength([1,3,5,7,8,0,-2,-4]), 2);
});

it('should return correct length of the longest sequence 15', () => {
  assert.equal(longestConsecutiveLength([1,3,5,7,9,100,100000,-1]), 0);
});

it('should return correct length of the longest sequence 16', () => {
  assert.equal(longestConsecutiveLength([1,3,5,7,8,100,100000,-1,10,11,101,102,103,100001,100002]), 4);
});

it('should return correct length of the longest sequence 16', () => {
  assert.equal(longestConsecutiveLength([0,1,2,3,5,6,7,8,-1,9]), 5);
});
