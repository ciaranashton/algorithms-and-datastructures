//Bubble Sort

function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;
    array.forEach((item, i) => {
      if (item > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    });
  } while (swapped);

  return array;
}

module.exports = bubbleSort;
