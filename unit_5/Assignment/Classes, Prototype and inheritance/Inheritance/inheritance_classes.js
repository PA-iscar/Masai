class grandparents {
    constructor(grandpa, grandma) {
        this.grandpa = grandpa
        this.grandma = grandma
    }
}
class parents extends grandparents {
    constructor(grandpa, grandma, father, mother) {
        super(grandpa, grandma)
        this.father = father
        this.mother = mother
    }
}
class child extends parents {
    constructor(grandpa, grandma, father, mother, me) {
        super(grandpa, grandma, father, mother)
        this.name = me
    }
}
let me = new child("x", "y", "a", "b", "i")

console.log(me)
console.log(me.__proto__)
console.log(me.__proto__.__proto__)
console.log(me.__proto__.__proto__.__proto__)
console.log(me.__proto__.__proto__.__proto__.__proto__)
console.log(me.__proto__.__proto__.__proto__.__proto__.__proto__)