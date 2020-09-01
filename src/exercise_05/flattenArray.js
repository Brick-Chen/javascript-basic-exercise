export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }
  if (array.length === 0) {
    return [];
  }

  const ans = [];
  function helper(arr, level) {
    if (level === 3) {
      ans.push(arr);
      return;
    }
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] instanceof Array) {
        helper(arr[i], level + 1);
      } else {
        ans.push(arr[i]);
      }
    }
  }
  helper(array, 1);
  return ans;
}
