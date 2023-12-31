var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for(var i = 0; i < array.length - 1; i++) {
        insert(array, i, array[i + 1]);
    }
};

module.exports = insertionSort;