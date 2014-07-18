
function User() {
  //arguments array contains the arguments passed in the function
  this.Name = arguments[0];
  this.Age = arguments[1];
}
User.prototype.compare = function (collativePerson) {
  var result = "";
  if ((!this.Age) || (!collativePerson.Name)) {
    result = "User Name or Collative Person Name is empty";
  } 
  else if ((!this.Age) || (!collativePerson.Age) || (isNaN(this.Age)) || (isNaN(collativePerson.Age))) { 
    result = "User Age or collative Person age is empty or Non numeric";
  } 
  else if (parseInt(this.Age) > parseInt(collativePerson.Age)) {
    result = this.Name + " is older than " + collativePerson.Name;
  } 
  else if (parseInt(user1.Age) < parseInt(collativePerson.Age)) {
    result = collativePerson.Name + " is older than " + this.Name;
  } 
  else {
    result = this.Name + " has age equal to " + collativePerson.Name;
  }
  return result;
};

function createObject(name, age){
  var userName = document.getElementById(name).value,
      userAge = document.getElementById(age).value;
      return new User(userName,userAge);  
}

function displayResult(result) {
  if (result) {
    alert(result);
  }
  else {
    alert("OOPS Something Went Wrong");
  }
}  

document.getElementById("submitBtn").addEventListener("click",function() {
  user1 = createObject("userName","userAge");
  user2 = createObject("collativePersonName","collativePersonAge");
  var result = user1.compare(user2);
  displayResult(result);
});