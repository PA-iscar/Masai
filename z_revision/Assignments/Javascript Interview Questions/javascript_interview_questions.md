1. What is hoisting?
   <br/>
   Ans: The JS code interpretation is performed in two passes.
   i. During the first pass, the interpreter processes
   variable[NOT the initialitations (no values)] and function declarations.
   ii. The second pass is the actual code execution step. The interpreter processes
   function expressions and undeclared variables.
   <br/>

1. What is scoping?
   <br/>
   Ans: Scope determines the accessibility of variables, objects, and functions from different parts of the code. Scopes are of 3 types:

   i. Global scope.
   ii. Funcion scope.
   iii. Block scope.

   <br/>

1. How are var, let const different?
   <br/>
   Ans: some of the basic differences between var, let, and const are:

   - var is hoisted while let and const are not.
   - let and const can not be redeclared.
   - const has to be declared and initialized at the same time.
   - const can't be updated while let and var can be.

   <br/>

1. What are the two main differences in arrow functions?
   <br/>
   Ans:

   - Arrow function do not have their own this, they inherit this from the closest now arrow function parent.
   - Arrow function do not have the arguments property.

     <br/>

1. Does Call apply bind work for arrow functions?
   <br/>
   Ans: They do work but not as expected, because arrow functions do not have their own this, the thisArg is ignored.
   <br/>

1. What does call apply bind do?
   <br/>
   Ans: All these methods pass this keyword to a function.
   i. Call invokes the function and allows you to pass in arguments one by one.
   i. Apply invokes the function and allows you to pass in arguments as an array.
   i. Bind returns a new function, allowing you to pass in a this array and any number of arguments.

   <br/>

1. What are closures?
   <br/>
   Ans: A closure gives you access to an outer function’s scope from an inner function
   <br/>

1. Write a program to debounce a search bar?
   <br/>
   Ans:

   ```JS
    function debounce(callbackFn, delay = 1000) {
        let timer;
        return (() => {
            clearTimeout(timer);
            timer = setTimeout(() => callbackFn.call(), delay);
        })();

    };
    // usage
    function someFn() {
        console.log('Hi')
    };
    debounce(someFn, 1000);
   ```

    <br/>

1. Write a program to throttle a search bar?
   <br/>
   Ans:

   ```JS
    function throttle (callbackFn, delay = 1000) {
        var wait = false;
        return function () {
            if (!wait) {
                callbackFn.call();
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, delay);
            }
        }
    }
    // Usage
    function someFn(){
        console.log("Hi")
    }
    window.addEventListener("scroll", throttle(someFn, 1000));
   ```

   <br/>

1. create a custom method for an array called myMap, use prototype chain to achieve this
   <br/>
   Ans:

   ```JS
    Array.prototype.myMap = function (cb) {
        return this.map((el) => cb(el));
    };
    let arr = [1, 2, 3];

    arr = arr.myMap((a) => a * 5);
    console.log(arr);

   ```

   <br/>

1. What is event bubbling?
   <br/>
   Ans: Event bubbling refers to the propagation of event from child element to parent element.
   <br/>

1. What is event loop?
   <br/>
   Ans: Event loop is what makes JavaScript Asyncronous, Event loop monitors external events and calls the appropriate routines to handle them.
   <br/>

1. Explain promises to a 5 year old, with simple examples
   <br/>
   Ans: Lets say you are at school and your best friend asks you for a favor, "download the new GTA 6 game for me. If something bad happens and you can't get home on time ask your brother to download it."
   Your friend does not know when you will get home from school. He may not even care, as long as it happens. He wants you to complete some instructions whenever you arrive. And if something bad prevents you from getting home at all, he has a backup plan.
   Meanwhile, since your friend has asked you to download the game, he can work on other things.

   ```JS
    getHomeFromSchool().then(function (response) {
        downloadGame()
    }, function(err) {
        askBrotherToDownloadGame()
    })

    doOtherThings()
   ```

   <br/>

1. Write a function called sleep that will return a promise, if you do not provide a number to the function, then it will return an error and goto the catch block
   <br/>
   Ans:

   ```JS
    function sleep(ms) {
        return new Promise((resolve, reject) => {
            if (ms || ms === 0) {
                resolve(ms);
            } else {
                reject("Enter some time");
            }
        });
    }

    sleep()
        .then((res) => {
            console.log(`slept for ${res} milli seconds`);
        })
        .catch((err) => {
            console.log(err);
        });

    sleep(1000)
        .then((res) => {
            console.log(`slept for ${res} milli seconds`);
        })
        .catch((err) => {
            console.log("This is an error");
        });

   ```

   <br/>

1. what does async await mean?
   <br/>
   Ans: Async Await makes it easier to write promises. The async keyword is used to define an asynchronous function, which returns a AsyncFunction object. The await keyword is used to pause async function execution until a Promise is fulfilled, that is resolved or rejected, and to resume execution of the async function after fulfillment.
   <br/>

1. What does the this keyword mean?
   <br/>
   Ans: This keyword refers to an object but which objets depends on where and it is being invoked. In and object, this refers to the object, in a function, this refers to the global object, in call, apply, and bind methods this refers to the thisArg passed.
   <br/>

1. What are classes? what are getters and setters?
   <br/>
   Ans: A class is a blueprint or prototype that is used to create objects of similar kind. Getters are member functions that return or get some value from the object. Setters are member functions that add or set the value of some property in the object.
   <br/>

1. How do you declare private and static variables in classes
   <br/>
   Ans: All class fields are public by default, # can be used to declare private fields. Static keyword is used for defining static properties.
   <br/>

1. Create a Calculator class, it should be able to add, reduce multiply and divide. it should have a value getter, and that should return final output. keep the history of changes made as well, and keep that private, and a user should be able to see previous changes made to the value
   <br/>
   Ans:

   ```JS
    class Calculator {
    #history;
    constructor() {
        this.value = 0;
        this.#history = [];
    }

    add(num) {
        this.value += num;
        this.#history.push(`${num} added`);
    }

    reduce(num) {
        this.value -= num;
        this.#history.push(`${num} reduced`);
    }

    multiply(num) {
        this.value *= num;
        this.#history.push(`${num} multiplied`);
    }

    divide(num) {
        this.value /= num;
        this.#history.push(`${num} divided`);
    }

    getValue() {
        return this.value;
    }

    getHistory() {
        return this.#history;
    }
    }

    const calculator = new Calculator();
    calculator.add(5);
    calculator.reduce(2);
    calculator.multiply(3);
    calculator.divide(2);

    console.log(calculator.getValue());
    console.log(calculator.getHistory());
   ```

   <br/>

1. What is currying?
   <br/>
   Ans: It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. It is also called nested function is ES.
   <br/>

1. Write a program to flatten an array
   <br/>
   Ans:

   ```JS
   let result = [];
   const flatArray = (arr) => {
   arr.map((val) => {
       if (Array.isArray(val)) {
       flatArray(val);
       } else {
       result.push(val);
       }
   });
   };

   function runProgram(input) {
   let arr = input;
   flatArray(arr);
   console.log(result);
   }

   runProgram([1, [2, 3], [3], [[[5]], 6]]);

   ```

   <br/>
