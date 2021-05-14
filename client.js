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
