class animal {
    constructor(age) {
        this.age = age
    }
    printAge() {
        console.log(this.age)
    }
}

class human extends animal {
    constructor(name, age) {
        super(age)
        this.name = name
    }
    printName() {
        console.log(this.name)
    }
}

class man extends human {
    constructor(name, age) {
        super(name, age)
        this.gender = "Male"
    }
    printGender() {
        console.log(this.gender)
    }
    printDetails() {
        console.log(this)
    }
}

let abhi = new man("Abhishek", 19)

abhi.printAge()
abhi.printGender()
abhi.printName()
abhi.printDetails()
