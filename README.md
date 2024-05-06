# @hsc92180/binarysearch_npmpackage

This package provides a binary search algorithm to find the index of a target element in a sorted array.

## Installation

You can install this package using npm:

```bash
npm install @hsc92180/binarysearch_npmpackage
```

## Usage

To use the binary search algorithm provided by this package, simply import it into your JavaScript code and call the `binarySearch` function with a sorted array and a target element:

```javascript
const binarySearch = require('@hsc92180/binarysearch_npmpackage');

const arr = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearch(arr, target);
console.log(index); // Output: 2
```

If the target element is found in the array, the function will return its index. If the target is not found, it will return -1.

## API

### `binarySearch(arr, target)`

- `arr`: A sorted array to search in.
- `target`: The target element to search for.
- Returns: The index of the target element if found, otherwise -1.

## License

This package is licensed under the ISC License.
