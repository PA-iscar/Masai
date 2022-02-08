let values1 = { name: 'masai', password: 'admin@123', hostname: 'masaischool', client: 'chrome' }
let { name, password } = values1
console.log(name, password)

let values2 = { name: 'masai', address: { pincode: 560095 } }
let { address: { pincode: pin } } = values2
console.log(pin)

let values3 = [100, 200, 500, 600]
let [first, second] = values3
console.log(first, second)

let values4 = [100, [50, 60, 70]]
let [, [fi]] = values4;
console.log(fi)

let values5 = [1, {
    arr: [1, 2, 3]
}
]
let [, { arr: [, ...two] }] = values5;
console.log(two)