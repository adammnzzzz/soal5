// Gunakan array sebagai stack (tumpukan)

/**
 * Memeriksa apakah tanda kurung dalam string seimbang.
 * @param {string} s - String tanda kurung
 * @return {boolean} - true jika valid, false jika tidak
 */
const isValid = function (s) {
  let stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (pairs[char]) {
      let topElement = stack.pop();
      if (topElement !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

// --- CONTOH PEMANGGILAN DAN OUTPUT YANG DIHARAPKAN ---
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("[")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true (tapi input minimal 1 karakter)
console.log(isValid("(((")); // false
console.log(isValid(")))")); // false
console.log(isValid("([{}])")); // true
