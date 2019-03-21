function User(firstName, lastName, age, gender){
	this.firstName = firstName;  //Constructor functions 'this' does not refer to the function that it is in. 
	this.lastName = lastName;    //'this' refers to the object created by the function. 
	this.age = age;
	this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');

var user200 = new User('Jill', 'Robinson', 25, 'female');



User.prototype.emailDomain = '@facebook.com';

User.prototype.getEmailAddress = function() {
	return this.firstName + this.lastName + this.emailDomain;
}


