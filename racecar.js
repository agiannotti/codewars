var letters = [];

var word = 'racecar';

var rword = '';

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if ((rword = word)) {
  console.log(word + ' is a palindrome.');
}
