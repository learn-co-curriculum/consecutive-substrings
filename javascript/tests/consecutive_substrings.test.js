const consecutiveSubstrings = require('../consecutive_substrings');

test('returns an empty array when the input string is empty', () => {
  expect(consecutiveSubstrings('').length).toBe(0);
});

test('returns an array containing one string when the input is one character', () => {
  expect(JSON.stringify(consecutiveSubstrings('a'))).toBe(JSON.stringify(['a']));
});
    
test('can handle many letters', () => {
  expect(JSON.stringify(consecutiveSubstrings('ab'))).toBe(JSON.stringify(['a', 'ab', 'b']));
  expect(JSON.stringify(consecutiveSubstrings('abc'))).toBe(JSON.stringify(['a', 'ab', 'abc', 'b', 'bc', 'c']));
});
