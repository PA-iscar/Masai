1. Create a function call toggler using closures
   with the condition:

```
const toggle = toggler(1,2,3)

toggle() // 1
toggle() // 2
toggle() // 3
// the next time you toggle it the output is 1
toggle() // 1
toggle() // 2
```

<br/>
Ans:

```JS
const toggler = function () {
  let counter = 0;
  let printer = -1;
  let args = Array.from(arguments);

  return function () {
    counter++;
    if (counter > args.length) {
      printer++;
      return args[printer];
    }
  };
};
const toggle = toggler(1, 2, 3);

console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());

```

<br/>

1. What are IIFE?
   <br/>
   Ans: IIFE, aka, 'Immediately Invoked Function Expression' is a JavaScript function that runs as soon as it is defined.
   <br/>

1. What is currying?
   <br/>
   Ans: Curring is one of the advanced techniques of working with functions. Currying is helpful when you have to frequently call a function with a fixed argument. In other words "Currying" is the process of transforming a function taking N arguments into a function taking one argument and returning a function with N-1 arguments
   <br/>

1. Write a program to throttle using closures
   <br/>
   Ans:

   ```JS
       const throttle = (func, limit) => {
           let lastFunc;
           let lastRan;

           return function() {
               const context = this;
               const args = arguments;

               if (!lastRan) {
                   func.apply(context, args)
                   lastRan = Date.now();
               } else {
                   clearTimeout(lastFunc);
                   lastFunc = setTimeout(function() {
                       if ((Date.now() - lastRan) >= limit) {
                           func.apply(context, args);
                           lastRan = Date.now();
                       }
                   }, limit - (Date.now() - lastRan));
               }
           }
       }
       document.addEventListener("scroll", throttler( callback, 1000 )
   ```

   <br/>

1. What is currying?
   <br/>
   Ans: Curring is one of the advanced techniques of working with functions. Currying is helpful when you have to frequently call a function with a fixed argument. In other words "Currying" is the process of transforming a function taking N arguments into a function taking one argument and returning a function with N-1 arguments
   <br/>

1. Explain some areas where you have seen currying being implemented in React / other libraries?
   <br/>
   Ans: Curring can be used in React to handle events that also need some information.

```JS
const List = () => {
  const handleClick = (item) => () => {
    console.log(item);
  };
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <button onClick={handleClick(item)}>Log</button>
        </li>
      ))}
    </ul>
  );
};

```

   <br/>
   In the above example handleClick() function is invoked on click and curring is used in a way that we can pass an argument with the function call without actually making the call.
