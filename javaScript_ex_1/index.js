function User() {
  //arguments array contains the arguments passed in the function
  this.name = arguments[0];
  this.age = arguments[1];
}
User.prototype.compare = function (collativePerson) {
	if ((!this.name) || (!collativePerson.name)) {
    alert("Name cannot be empty");
  } 
  else if ((!this.age) || (!collativePerson.age) || (isNaN(this.age)) || (isNaN(collativePerson.age))) { 
    alert("Age empty or Not numeric");
  } 
  else if (this.age > collativePerson.age) {
    return this.name + " is older than " + collativePerson.name;
  } 
  else if (this.age < collativePerson.age) {
    return collativePerson.name + " is older than " + this.name;
  } 
  else {
    return this.name + " has age equal to " + collativePerson.name;
  }
};
function createObject(){
  var userName = document.getElementById("userName").value,
      userAge = document.getElementById("userAge").value,
      collativePersonName = document.getElementById("collativePersonName").value,
      collativePersonAge = document.getElementById("collativePersonAge").value;
  	  user1 = new User(userName,userAge),
      user2 = new User(collativePersonName, collativePersonAge),
  displayResult();
}
function displayResult(){
	var result = user1.compare(user2);
	if (result) {
		alert(result);
	}
	else {
		alert("Try Again");
	}
}
