export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (start === end) {
    return [];
  }
  const ans = [];
  const step = start < end ? 1 : -1;
  for (let i = start; i !== end; i += step) {
    ans.push(i);
  }
  return ans;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let ans = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    ans += numbers[i];
  }
  return ans;
}
