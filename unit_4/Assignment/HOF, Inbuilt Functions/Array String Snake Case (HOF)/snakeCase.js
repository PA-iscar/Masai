let arr = ["Masai School", "Other School", "First Last", "oink oink"];

const toSnakeCase = str => {
    const snakeArr = str.split(" ").reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join('_');
};

let snake = arr.map(toSnakeCase);

console.log(snake);