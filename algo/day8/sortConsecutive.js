/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
    //first we create an empty array
    let arr = [];
    //index variable inside the for loop and loop through the array and repeat a certain process at a each iteration
    for (let i = 1; i < sortedNums.length; i++) {
        //check the difference between the current element and the previous and if the difference is one then it is consecutive other wise it is not
        if (sortedNums[i] - sortedNums[i - 1] != 1) {
            //if it not consecutive we need to create an object to indicate the index number and the element and then add it to the array
            let obj = { i: i, n: sortedNums[i] };
            arr.push(obj);
            // obj[i] = i;
            // obj[n] = sortedNums[i];
        }
    }
    //after finishing the loop we need to return the array
    return arr;
}

console.log(allNonConsecutive(nums1));
console.log(allNonConsecutive(nums2));
console.log(allNonConsecutive(nums3));


/*****************************************************************************/