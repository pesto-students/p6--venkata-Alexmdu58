const hasDuplicate = arr => new Set(arr).size !== arr.length

console.time('a');

console.log(hasDuplicate([1,5,-1,4])); 

console.timeEnd('a');
