export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined) {
    throw new Error('Creating list from undefined array');
  }

  if (array === null) {
    throw new Error('Creating list from undefined array');
  }

  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  const list = { value: -1, next: null };
  let prev = list;
  for (let i = 0; i < array.length; i += 1) {
    const curr = { value: array[i], next: null };
    prev.next = curr;
    prev = curr;
  }
  return list.next;
}
