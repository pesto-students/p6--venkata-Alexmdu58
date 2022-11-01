function myPoliPromise(exec) {
  let result = "";
  let message = "";
  let time = 0;
  let startTime = 0;
  let isPending = true;
  let isFullfilled = false;
  let isRejected = false;

  isDone = false;

  //public
  function timeLogStart(label) {
    startTime = performance.now();
    console.time(label);
  }
  //public
  function timeLogEnd(label) {
    time = performance.now() - startTime;

    console.timeEnd(label);
    // console.log(time);
  }

  function resolve(_result) {

    if (!isDone) return this;

    console.log("Resolve");

    result = _result;
    message = _result;

    //Switching state
    isFullfilled = true;
    isPending = false;
    isDone = true;


    return this;
  }

  function reject(_result) {

    if (!isDone) return this;

    result = _result;
    message = _result.message;

    console.log("Reject");

    //Switching state
    isRejected = true;
    isPending = false;
    isDone = true;

     return this;
  }

  // Then function for Promise -> Dot Notation function
  this.then = function (thenHandler) {

    if (!isDone) return this;

    if (!isFullfilled) return this;

    console.log("Then");

    thenHandler(result);
    return this;
  };

  // Catch function for Promise -> Dot Notation function
  this.catch = function (catchHandler) {

    if (!isDone) return this;

    if (!isRejected) return this;

    console.log("Catch");

    catchHandler(result);
    return this;
  };

  // Finally function for Promise -> Dot Notation function
  this.finally = function (finallyHandler) {

    if (!isDone) return this;

    finallyHandler();
    timeLogEnd("promise");

    return this;
  };

  timeLogStart("promise");

  //sCallback with resolve and reject as an input arguments
  exec(resolve, reject);
}

// Return a Number
const getNumber = () => {
  // 0 - 9
  return Math.floor(Math.random() * 10);
};

// Check if given number is divisible by given number or not
let isDivisibleBy = (number, divisibleBy) => {
  if (number % divisibleBy === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("Start");

// Initialize Promise function
let p = new myPoliPromise((resolve, reject) => {


  let number = getNumber(), divideBy = 5;
  number = 4;

  console.log(`In Promise`);
  console.log(`Check if  ${number} % ${divideBy} = 0 `);
  if (isDivisibleBy(number, divideBy)) {
    resolve("Yes");
  } else {
    reject(new Error("No"));
  }
})

  .then((result) => {
    console.log("From then callback");
  })
  .catch((error) => console.log(error.message))
  .finally((time)=>{
    console.log("Ends");

  });
