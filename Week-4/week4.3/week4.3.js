// Fibonacci series with iterator

var arr = [];

 for (let i = 0; i < 10; i++) {
   let next = 0;
   if (i == 0) {
     next = 0;
   } else if (i == 1) {
     next = 1;
   } else {
     next = arr[i-2] + arr[i-1];
   }
   arr.push(next);
   console.log(next); // 0 1 1 2 3
  }
