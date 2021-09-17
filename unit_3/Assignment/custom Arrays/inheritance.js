//* Assignment 4210/2568 Inheritance

var grandParents = {
    grandFather:'Chander Bhan',
    grandMother:'Eishwar Devi'
}

var parents = Object.create(grandParents);
parents.father = 'Mahender';
parents.mother = 'Manju';

function son() {
    this.name = 'Abhishek';
}

son.prototype = parents;
var s = new son();

console.log(s);
console.log(s.__proto__);
console.log(s.__proto__.__proto__);
console.log(s.__proto__.__proto__.__proto__);
console.log(s.__proto__.__proto__.__proto__.__proto__);