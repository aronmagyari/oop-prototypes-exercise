// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/


// 3 -  Add a property on the object created from the Person function called family which is an empty array.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.

Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/


var Person = function(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.family = [];
}

Person.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}
Person.prototype.addToFamily = function(person) {
	if (person instanceof Person && this.family.indexOf(person) === -1) {
		this.family.push(person);
	}
	return this.family.length;
}


// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"


*/

Array.prototype.map = function(callback) {
	var newArr = [];
	for(var i = 0; i < this.length; i++) {
		newArr[i] = callback(this[i], i, this);
	}
	return newArr;
}

String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}