

// person function
let Person = function() {};

// initialize person function
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// teacher function
let teacher = function() {};

// prototype with person
teacher.prototype = new Person();

// teach class
teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

let him = new teacher();

him.initialize("Ajay");
him.teach("Chemistry");

// output : Ajay  is now teaching Chemistry
