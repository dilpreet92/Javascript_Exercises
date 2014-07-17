
function User() {
  //arguments array contains the arguments passed in the function
  this.Name = arguments[0];
  this.Age = arguments[1];
}
User.prototype.compare = function (collativePerson) {
  var result = "";
  if ((!this.Age) || (!collativePerson.Name)) {
    alert("User Name or Collative Person Name is empty");
  } 
  else if ((!this.Age) || (!collativePerson.Age) || (isNaN(this.Age)) || (isNaN(collativePerson.Age))) { 
    alert("User Age or collative Person age is empty or Non numeric");
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
  this.displayResult(result);
};
User.prototype.displayResult = function(result) {
  if (result) {
    alert(result);
  }
  else {
    alert("OOPS Something Went Wrong");
  }
}  
function createObject(){
  var userName = document.getElementById("userName").value,
      userAge = document.getElementById("userAge").value,
      collativePersonName = document.getElementById("collativePersonName").value,
      collativePersonAge = document.getElementById("collativePersonAge").value;
      user1 = new User(userName,userAge),
      user2 = new User(collativePersonName, collativePersonAge);
  user1.compare(user2);
}
document.getElementById("submitBtn").addEventListener("click",createObject);