var promiseHelper = {
  message : "not defined",
  log: function() { 
       console.log(this.message)
  },
};

function* generator(resolveFn, rejectFn) {
  doTask = (message) => {
    resolveFn(message);
  };

  try {
    console.log("in Generator");
     doTask(yield);// "Do Task 1"
     doTask(yield);
     doTask(yield);
     console.log("Generator ends");
  } catch (er) {
    rejectFn(er.message);
  }
}

const resolve =  (message) => promiseHelper.log.bind({message})();
const reject =  (message) => promiseHelper.log.bind({message})();


let obj = generator(resolve, reject);
console.log("start");
obj.next();
console.log("first next");
setTimeout(() => {  obj.next("Do Task 1"); }, 1000);
setTimeout(() => {  obj.next("Do Task 2"); }, 2000);
setTimeout(() => {  obj.throw(new Error("Rejected...")); }, 3000);
setTimeout(() => {  obj.next("This wont work..."); }, 4000);
console.log("End...");
