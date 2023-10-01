const selectionSort = require('../desafios/1_selection_sort.js');


test('selection sort [22, 11, 99, 88, 9, 7, 42]', () => {
    let array = [22, 11, 99, 88, 9, 7, 42];
    selectionSort(array);
    expect(array).toStrictEqual([7, 9, 11, 22, 42, 88, 99]);
})


test('selection sort [1, -1, 2, 30, 40, 10, -50]', () => {
    let array = [1, -1, 2, 30, 40, 10, -50];
    selectionSort(array);
    expect(array).toStrictEqual([-50, -1, 1, 2, 10, 30, 40]);
})