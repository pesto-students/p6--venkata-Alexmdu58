
function isVowels(char) {
  return "aeiou".includes(char);
}

// for...of loop
function vowelCount(str) {
  const vowelMap = new Map();

  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();

    if (isVowels(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

// with object
function vowelCount2(str) {
  const counts = {};

  str.split("").forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  return new Map(Object.entries(counts));
}


function vowelCount3(str) {
  let vowelMap = new Map();

  str.split("").forEach((x) => vowelMap.set(x, vowelMap.get(x) || 0 + 1));

  return vowelMap;
}

console.time();
const result1 = vowelCount("aa ee ii oo uu");
console.timeEnd();
console.log(result1);

console.time();
const result2 = vowelCount2("aa ee ii oo uu");
console.timeEnd();
console.log(result2);

console.time();
const result3 = vowelCount3("aa ee ii oo uu"); 
console.timeEnd();
console.log(result3);
