// BIND
// It gives you the copy, it can be invoked later


let name = {
 fName : "Alex",
 lName : "Arun"
}

let printFullName = function (district,state) {
 console.log(this.fName + "  is from " + district + "," + state)
}

let printMyName = printFullName.bind(name,"Madurai","Tamil Nadu");
console.log(printMyName);

printMyName();
