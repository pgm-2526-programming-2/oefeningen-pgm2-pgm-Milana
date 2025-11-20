function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
console.log(checkAge(20))
console.log(checkAge(17))

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
console.log(checkAge(20))
console.log(checkAge(17))