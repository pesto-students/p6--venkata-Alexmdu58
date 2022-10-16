function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // What is logged?
Output:
Count is 0
Because increment() method is not updating message variable ,just incrementing variable count.


// New following code.

function createIncrement() {
  let count = 0;
  let message;
  function increment() {
    count++;
     message = `Count is ${count}`; // Count is 0
  }
   ...
Output:
Count is 3
