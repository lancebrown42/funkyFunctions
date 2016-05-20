//tripleFive!
var num = "Five"
function tripleFive(number){
	for (var i = 0; i < 3; i++) {
		console.log(number+"!")
	}
}
tripleFive(num)

//lastLetter
function lastLetter(word) {
	console.log(word[word.length-1])
}
lastLetter(prompt("Gimme a word"))

//square
function square(number2) {
	console.log(number2*number2)
}
square(prompt("Gimme a number"))

//negate
function negate(number3) {
	console.log(0-number3)
}
negate(prompt("another number"))

//toArray
function toArray(thing, thing1, thing2) {
	var arr = [thing, thing1, thing2]
	console.log(arr)
}
