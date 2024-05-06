/**
 * Binary search algorithm to find the index of a target element in a sorted array.
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} target - The target element to search for.
 * @return {number} - The index of the target element if found, otherwise -1.
 */
function binarySearch(arr, target) {
    // Sort the array (if not already sorted)
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the target is found at the middle index, return the index
        if (arr[mid] === target) {
            return mid;
        }
        
        // If the target is less than the element at the middle index, search the left half
        if (arr[mid] > target) {
            right = mid - 1;
        } 
        // If the target is greater than the element at the middle index, search the right half
        else {
            left = mid + 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}


module.exports = binarySearch;