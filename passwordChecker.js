# JS-Challenges
function checker(name,password) {
valid = false
if (name == password) {
return "ID and password cannot be the same"
} else if (name.length < 6 || password.length < 6) {
return "ID and password have to be at least six characters long"
} else if (name.includes("!") || (name.includes("#") || (name.includes("$")) === true)) {
return "ID cannot contain the following characters: ! # $"
} else if (password.includes("!") || (password.includes("#") || (password.includes("$"))) !== true) {
return "Password has to contain at least one of: ! # $"
} else if (password.includes("password")) {
return "Password cannot include password"
} else {
valid = true
return valid
}
}


function createUser() {
var name = prompt("Enter Username")
var password = prompt("Enter a Password")
if (checker(name,password) === true) {
return "Welcome to the Club " + name
} else {
return "FAIL!:  " + checker(name,password)
}
}


createUser()
