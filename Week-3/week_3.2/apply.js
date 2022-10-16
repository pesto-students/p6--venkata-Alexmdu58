// CALL
let name = {
 firstName: "Alex",
 lastName:"Arun",
 printFullName : function(){
   console.log(this.firstName);
 }
}

name.printFullName();

let name2 = {
 firstName: "Abhi",
 lastName:"Athav",
}

// Function borrowing methoid
name.printFullName.call(name2);
--------------------------------------
// 2.Another method

let name = {
 firstName: "Alex",
 lastName:"Arun",

}

let printFullName = function(){
   console.log(this.firstName);
 }

let name2 = {
 firstName: "Abhi",
 lastName:"Venki",
}
printFullName.call(name);
printFullName.call(name2);

-----------------------------

 let name = {
 firstName: "Alex",
 lastName:"Arun",
}

let printFullName = function(District){
   console.log(this.firstName + " " + District);
 }

printFullName.call(name,"Madurai");
-------------------------------
// APPLY
In call method , we will pass this argument individually,
  but in APPLY method, we will pass it a second argument as a array list

  printFullName.apply(name,["Madurai"]);
