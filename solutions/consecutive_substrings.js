function consecutiveSubstrings(string) {
  const stringArr = string.split('');
  const subs = [];

  stringArr.forEach((char, idx) => {
    subs.push(char);

    let fragment = char;

    stringArr.slice(idx + 1).forEach((letter) => {
      fragment = fragment + letter;
      subs.push(fragment);
    });
  });

  return subs;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log(consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log(consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log(consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'b']");
  console.log(consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
