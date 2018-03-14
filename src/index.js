module.exports = function longestConsecutiveLength(array) {
    //the solution is inspired by 
    //https:www.geeksforgeeks.org/longest-consecutive-subsequence/
    
    let set = new Set(array);
    let maxLength = 0;
    let currLength;

    for (let i = 0, length = array.length; i < length; i++) {

        currLength = 1;

        while (set.has(array[i] + currLength)) {

            currLength++;

        }

        currLength > maxLength ? maxLength = currLength : currLength;

    }

    return maxLength;

}
