function grandparents(grandpa, grandma) {
    this.grandpa = grandpa
    this.grandma = grandma
}
function parents(grandpa, grandma, father, mother) {
    grandparents.call(this, grandpa, grandma)
    this.father = father
    this.mother = mother
}
parents.prototype = new grandparents();
parents.prototype.constructor = parents
function child(grandpa, grandma, father, mother, me) {
    parents.call(this, grandpa, grandma, father, mother)
    this.name = me
}

child.prototype = new parents();
child.prototype.constructor = child

let me = new child("x", "y", "a", "b", "i")

console.log(me)
console.log(me.__proto__)
console.log(me.__proto__.__proto__)
console.log(me.__proto__.__proto__.__proto__)
console.log(me.__proto__.__proto__.__proto__.__proto__)
console.log(me.__proto__.__proto__.__proto__.__proto__.__proto__)