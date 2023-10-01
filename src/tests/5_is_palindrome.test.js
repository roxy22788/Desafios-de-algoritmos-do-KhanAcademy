const isPalindrome = require('../desafios/5_is_palindrome.js');

test('is palindrome rotor', () => {
    expect(isPalindrome('rotor')).toBe(true);
});

test('is palindrome motor', () => {
    expect(isPalindrome('motor')).toBe(false);
});

test('is palindrome ', () => {
    expect(isPalindrome('')).toBe(true);
});

test('is palindrome a', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('is palindrome aabbaa', () => {
    expect(isPalindrome('aabbaa')).toBe(true);
});

test('is palindrome dksjdjdfj', () => {
    expect(isPalindrome('dksjdjdfj')).toBe(false);
});