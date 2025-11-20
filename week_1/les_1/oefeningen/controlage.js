function controlAge(age){
    if (age>= 18){
        return "volwassen"
    } return "nog niet volwassen"
}

//console.log(controlAge(16))
//console.log(controlAge(20))

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
console.log(checkAge(17))

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
