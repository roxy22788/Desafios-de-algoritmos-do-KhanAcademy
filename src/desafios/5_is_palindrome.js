// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    if (str.length  <= 1) {
        return true;
    }
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    
    var _middleCharacters = middleCharacters(str);
    return isPalindrome(_middleCharacters);
};


module.exports = isPalindrome;