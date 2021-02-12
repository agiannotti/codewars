// replace every letter with position in alphabet
function alphabetPosition(text) {
  let newArr = [];
  // split string into array
  let char = text.toLowerCase().replace(/[^a-zA-Z]/g, '');
  let arr = char.split('');
  // loop through new array to determine char position of each item in array
  for (let i = 0; i < arr.length; i++) {
    let pos = arr[i].charCodeAt(0) - 96;
    newArr.push(pos);
  }
  return newArr.join(' ');
}
