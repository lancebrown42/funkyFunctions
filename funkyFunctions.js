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
// lastLetter(prompt("Gimme a word"))

//square
function square(number2) {
	console.log(number2*number2)
}
// square(prompt("Gimme a number"))

//negate
function negate(number3) {
	console.log(0-number3)
}
// negate(prompt("another number"))

//toArray
function toArray(thing, thing1, thing2) {
	var arr = [thing, thing1, thing2]
	console.log(arr)
}

//startswithA
function startsWithA(wordWithA){
	
	console.log(wordWithA[0]=="A" || wordWithA[0]=="a")
}

//excite

function excite(getExcited){
	console.log(getExcited+"!!!")
}

//sun

function sun(hasSun){
	console.log(hasSun.toLowerCase().indexOf("sun") >= 0)
}

//tiny

function tiny(number){
	console.log(number >= 0 && number <= 1)
}

//getSeconds

function getSeconds(time){
	var minutes = time[0]+time[1]
	var seconds = time[3]+time[4]
	var total = parseInt(minutes)*60+parseInt(seconds)
	console.log(total)
}