1. Give an example where call apply bind is. required?
   <br/>
   Ans: Sometimes we want to use a method or a function which belongs to another object or context. We might want to call or make use of another method without replicating in order to avoid duplicates or couplings.
   <br/>

1. What is the difference between readFile and readFileSync?
   <br/>
   Ans: readFile is non-blocking async, while readFileSync is blocking sync.
   <br/>

1. What does process in node.js mean?
   <br/>
   Ans: process is a global object that can be accessed inside any module without requiring it.
   <br/>

1. Explain what node.js is?
   <br/>
   Ans: Node.js is an open source JavaScript runtime environment used for non-blocking, event-driven servers.
   <br/>

1. What is the difference of JS from browser to JS on node.js
   <br/>
   Ans: JavaScript on browser does not have full access to the system as a safety measure, whereas JavaScript on Node.js has full access to the system.
   <br/>

1. Write three different ways to reverse a string in Javascript?
   <br/>
   a. using inbuilt method
   <br/>
   Ans:

```JS
    let str = "masai";
    str = str.split("").reverse().join("");
    console.log(str);

```

   <br/>
   b. iteratively
   <br/>
   Ans:

```JS
    const reverseString = (str) => {
        let reversed = "";
        for (const c of str) {
            reversed = c + reversed;
        }
        return reversed;
    };

    let str = "masai";
    str = reverseString(str);
    console.log(str)

```

   <br/>
   c. recursively
   <br/>
   Ans:

```JS
    function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
    }
    let str = "masai";
    str = reverse(str);
    console.log(str);
```

   <br/>

1. Write a program to check two objects are equal ( deep equal )
   <br/>
   Ans:

   ```JS
      function deepEqual(obj1, obj2) {
         if (obj1 === obj2) return true;

         if (obj1 !== Object(obj1) && obj2 !== Object(obj2)) return obj1 === obj2;

         if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

         for (let key in obj1) {
            if (!(key in obj2)) return false;
            if (!deepEqual(obj1[key], obj2[key])) return false;
         }

         return true;
      }

      console.log(
      deepEqual({ val1: { val3: 4 }, val2: 3 }, { val1: { val3: 4 }, val2: 3 })
      );

   ```

   <br/>

1. What is shallow equal?
   <br/>
   Ans: shallow equal is when the properties of the objects are compared using "===" and will not conduct comparisons deeper into the properties.
   <br/>
