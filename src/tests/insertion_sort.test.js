const insertionSort = require('../2_insertion_sort.js');

test('sort [3, 1, 2, 4, -1', () => {
    let array = [3, 1, 2, 4, -1];
    insertionSort(array);
    expect(array).toStrictEqual([-1, 1, 2, 3, 4]);
})

test('sort [1, 1, 1, 1, -1]', () => {
    let array = [1, 1, 1, 1, -1];
    insertionSort(array);
    expect(array).toStrictEqual([-1, 1, 1, 1, 1]);
})