var test = [1, 2, 3];
var test2 = ['a', 'b', 'c'];
var test3 = ['x', 'y', 'z'];
var arr = test.concat(test2,test3);

console.log(arr);

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames)

var newName ='Marian'

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	console.log(allNames);
}