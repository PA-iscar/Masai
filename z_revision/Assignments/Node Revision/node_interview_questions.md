1. Explain in brief what is node js?
   <br/>
   Ans: Node.js is an open-source, cross-platform, back-end runtime environment for executing JavaScript code outside browser, that runs on the Chrome V8 engine. Node.js is used for non-blocking, event-driven severs, due to its single-threaded nature.
   <br/>

2. How is node js non-blocking?
   <br/>
   Ans: The event loop in Node.js is what allows it to perform non-blocking operations despite the fact that JavaScript is single-threaded. JavaScript is non-blocking because processes that reqire an API call are executed in the Web API.
   <br/>

3. What is throughput?
   <br/>
   Ans: Throughput is the rate at which something can be processed, it is a measure of how many units of information a system can process in a given amount of time.
   <br/>

4. How is Node js having high IO throughput?
   <br/>
   Ans: Node. js uses event-driven architecture and non-blocking (asynchronous) tasks that run on a single thread. This means that all I/O operations don't block any other operations. Due to this Node js can perform more operations and has a high I/O throughput.
   <br/>

5. What are CPU intensive tasks?
   <br/>
   Ans: CPU intensive tasks are complex operations or actions that require more RAM or processing power, sorting, search, graph traversal, matrix multiply are all CPU operations, a process is CPU-intensive or not it depends on how much and how frequent are their execution.
   <br/>

6. How can you end up blocking your main thread in node.js?
   <br/>
   Ans: Main thread in node.js can be blocked if a server request that needs to perform some calculations is taking some time to complete. CPU intensive tasks if not handled properly can end up blocking the main thread.
   <br/>

7. What is the event loop?
   <br/>
   Ans: Event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, which effectively runs it.
   <br/>

8. What are different phases in event loop?
   <br/>
   Ans: The Event Loop contains six main phases: timers, I/O callbacks, preparation / idle phase, I/O polling, setImmediate() callbacks execution, and close events callbacks.
   <br/>

9. What is process.tick?
   <br/>
   Ans: A tick is the dequeuing of an event from the "event loop queue" and the execution of said event, In other words one full cycle or iterations of Event loop is known as a tick.
   <br/>

10. When can process.tick starve your event loop?
    <br/>
    Ans: Since NodeJS v0.12 and above does not implement process.maxTickDepth parameter, excessively adding events to the nextTick queue can cause I/O starvation in the event loop.
    <br/>

11. What is the difference between setTimeout and setInterval?
    <br/>
    Ans: setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
    <br/>

12. How can you make a network request with http module from the backend?
    <br/>
    Ans:

    ```JS
        const https = require('https');

        https.get('https://jsonplaceholder.typicode.com/users', res => {
        let data = [];
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);

        res.on('data', chunk => {
            data.push(chunk);
        });

        res.on('end', () => {
            console.log('Response ended: ');
            const users = JSON.parse(Buffer.concat(data).toString());

            for(user of users) {
            console.log(`Got user with id: ${user.id}, name: ${user.name}`);
            }
        });
        }).on('error', err => {
        console.log('Error: ', err.message);
        });
    ```

<br/>

13. How can you create your own events?
    <br/>
    Ans: This syntax can be used to create listen and dispatch custom events.

```JS
    // create custom events
    const catFound = new CustomEvent('animalfound', {
    detail: {
        name: 'cat'
    }
    });
    const dogFound = new CustomEvent('animalfound', {
    detail: {
        name: 'dog'
    }
    });

    // add an appropriate event listener
    obj.addEventListener('animalfound', (e) => console.log(e.detail.name));

    // dispatch the events
    obj.dispatchEvent(catFound);
    obj.dispatchEvent(dogFound);

    // "cat" and "dog" logged in the console
```

<br/>

14. What are clusters?
    <br/>
    Ans: Cluster is a module of Node.js that contains sets of functions and properties that helps the developers for forking processes through which they can take advantage of the multi-core system. With the cluster module, the creation and sharing of child processes and several parts become easy.
    <br/>

15. How does your Node.js application handle scale? Elaborate
    <br/>
    Ans: The cluster module can be used to enable load balancing over an environment’s multiple CPU cores. It’s based on the child process module fork method and it basically allows us to fork the main application process as many times as we have CPU cores. It will then take over and load balance all requests to the main process across all forked processes. The easiest thing to do to scale a big application is to clone it multiple times and have each cloned instance handle part of the workload. We can also scale an application by decomposing it based on functionalities and services. This means having multiple, different applications with different code bases and sometimes with their own dedicated databases and User Interfaces. We can also split the application into multiple instances where each instance is responsible for only a part of the application’s data. This strategy is often named horizontal partitioning, or sharding, in databases.
    <br/>

16. What is the difference between readFile and readFileSync?
    <br/>
    Ans: readFile is non-blocking async, while readFileSync is blocking
    <br/>

17. What are CORS? How do you configure them? Why do you need them?
    <br/>
    Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
    <br/>

```JS
    const express = require( 'express' );
    const cors = require( 'cors' );
    const app = express();
    const port = 3030;
    //cors is enabled through out the entire app
    app.use( cors() );
    app.get( '/users', (req, res) => {
        res.json({ info: 'cors is enabled' })
    });
    app.listen( port, () => {
        console.log(`App is running on ${port}`)
    });
```

<br/>

18. What is rate limiting?
    <br/>
    Ans: Rate limiting is the strategy or process of limiting and controling the rate of network requests made to or by a network interface controller.
    <br/>

19. How does middlewares work in express?
    <br/>
    Ans: In Express, middleware are a specific style of function which you configure your application to use. They can run any code you like, but they typically take care of processing incoming requests, sending responses and handling errors. They are the building blocks of every Express application. Middleware literally means anything you put in the middle of one layer of the software and another. Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.
    <br/>

20. What is the difference between Encryption and Hashing?
    <br/>
    Ans: Encryption employs an algorithm to convert the message that can be unlocked by a key to get back the original message. In hashing, once the message is converted, there is no way of getting it back.
    <br/>

21. What is the difference between https and http?
    <br/>
    Ans: HTTPS is much more secure than HTTP as HTTPS is HTTP with encryption. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://.
    <br/>

22. What is TLS?
    <br/>
    Ans: Transport Layer Security (TLS) encrypts data sent over the Internet to ensure that eavesdroppers and hackers are unable to see what you transmit which is particularly useful for private and sensitive information such as passwords, credit card numbers, and personal correspondence.
    <br/>

23. What is AES?
    <br/>
    Ans: The AES engine encrypts the plain text (source data) into cipher text (encrypted data) and sends it to the NAND flash for storage.
    <br/>

24. What is JWT Token? Why do we need to use JWT? What are some pros and cons?
    <br/>
    Ans: A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed. When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source.
    <br/>

```
PROS:
It is compact, Can be sent via URL/Post request/HTTP Header which makes it fast for transmission and usable.
JWT is a particularly useful technology for API authentication and server-to-server authorization.
JWT is a secure way to authenticate users and share information.
```

```
Cons:
One of the major cons of relying on tokens is that it relies on just one key.
The overall size of a JWT is quite more than that of a normal session token, which makes it longer whenever more data is added to it.
Shorter Lifespan.
```

25. What is salting? Where do we store salt?
    <br/>
    Ans: Salting is simply the addition of a unique, random string of characters known only to the site to each password before it is hashed, typically this “salt” is placed in front of each password. The salt value needs to be stored by the site, which means sometimes sites use the same salt for every password. The salt is not an encryption key, so it can be stored in the password database along with the username – it serves merely to prevent two users with the same password getting the same hash.
    <br/>

26. What is the difference between Authorisation and Authentication?
    <br/>
    Ans: Authentication is a process involving the verification of the user. Authorization validates privileges of the user but authentications verify its credentials.
    <br/>

27. What is difference between JS on the browser and node?
    <br/>
    Ans: JavaScript in browser is snadboxed for safety reasons where as node.js has full access to the system like any other native application. This means you can read and write directly to the file system, have unrestricted access to the network, and can also execute software.
    <br/>

28. What is V8?
    <br/>
    Ans: V8 is a free and open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers.
    <br/>
