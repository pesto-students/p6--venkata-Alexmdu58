
// memoize function

// used to speed up the program by storing te results of function calls and returns the result when same input occurs again

// normal subtract function

var sub = (a)=> (20- a);
console.log(sub(10));

// memoize subtract function

const memoizeSub= ()=>{
let cache= {};
return  (a) => {
  // here it checks
  if( a in cache){
    console.log('From cache');
    return cache[a];
  }
  else { console.log("1st time calculation")
        let result = (20-a);
        cache[a] = result;
        return result;
  }
}
}

const mSub= memoizeSub();
 // 1st time execution
console.log(mSub(11));
// From cache
console.log(mSub(11));
