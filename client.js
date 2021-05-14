console.log('Lets do this');

console.log('*** --- MASKIFY --- ***');
// Mask all characters except last 4
function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  }
  return '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4);
}

console.log('cccccc', maskify('cccccc'));
console.log('ccc', maskify('ccc'));
console.log('ccccjhjhlhkhhkljhcc8800', maskify('ccccjhjhlhkhhkljhcc8800'));

/*** -------------------------------- ***/

console.log('*** --- VALID WALK --- ***');
// find a walk that is 10 steps and brings you back to where you started
function isValidWalk(walk) {
  if (
    walk.length === 10 &&
    walk.filter((v) => v === 'n').length ===
      walk.filter((v) => v === 's').length &&
    walk.filter((v) => v === 'e').length ===
      walk.filter((v) => v === 'w').length
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(
  'true',
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
);
console.log(
  'false',
  isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
);

/*** -------------------------------- ***/

console.log('*** --- ACCUM --- ***');
// ZhclLa -> Z-Hh-Ccc-Llll-Lllll-Aaaaaa
function accum(s) {
  let array = s.split('');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase() + array[i].toLowerCase().repeat(i);
  }
  return array.join('-');
}

console.log(accum('Zpgl'));
console.log(accum('Zp'));
console.log(accum('reukiwo'));

/*** -------------------------------- ***/

console.log('*** --- removeChar --- ***');
// remove first and last characters
function removeChar(str) {
  return str.slice(1, -1);
}

console.log('loquen', removeChar('eloquent'));
console.log('erso', removeChar('person'));
console.log('iglongwor', removeChar('biglongword'));

/*** -------------------------------- ***/

console.log('*** --- Disemvowel --- ***');
// Remove all vowels from trolls comments
function disemvowel(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .filter((v) => !vowel.includes(v.toLowerCase()))
    .join('');
}
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel('What are you, a communist?'));

/*** -------------------------------- ***/

console.log('*** --- Fibonacci --- ***');
// Fibonacci sequence
function fibo(nth) {
  let currFib = [0, 1];
  let currNum = 1;
  for (let i = 1; i < nth; i++) {
    currNum = Number(currFib[currFib.length - 1] + currFib[currFib.length - 2]);
    currFib.push(currNum);
  }
  return currNum;
}

console.log('5th', fibo(5)); // expect 5
console.log('10th', fibo(10)); // expect 55
console.log('43rd', fibo(43)); // expect 433494437

/*** -------------------------------- ***/

console.log('*** --- Find the odd INT --- ***');
// Given an array of integers, find the one that appears an odd number of times.
function findOdd(A) {
  for (const i of A) {
    if (A.filter((x) => x === i).length % 2 === 1) {
      return i;
    }
  }
}
console.log('-1', findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log('5', findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log('10', findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

/*** -------------------------------- ***/

console.log('*** --- Valid Pin --- ***');
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
function validatePIN(pin) {
  return (
    pin.split('').filter((n) => !(Number(n) > -1)).length === 0 &&
    (pin.length === 4 || pin.length === 6)
  );
}

console.log('false', validatePIN('a234'));
console.log('false', validatePIN('1.234'));
console.log('true', validatePIN('234234'));
console.log('false', validatePIN('-1234'));
console.log(
  'false',
  validatePIN(`123
`)
); // still fails.. check later
