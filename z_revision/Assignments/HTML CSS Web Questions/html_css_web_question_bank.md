1.  Explain briefly what happens when you hit a url? explain DNS lookup
    <br/>
    Ans: firstly, DNS query runs through cache to find the IP address associated with the domain name.If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server. Then the browser initiates a TCP connection with the server. After a successful connection, The browser sends an HTTP request to the webserver and the webserver sends out and HTTP response and after receiving the response, the browser displays the html content.
    <br/>

1.  What is a URLs full form? Explain what a url is and the four parts it consists of The protocol in use The hostname of the server The location of the file The arguments to the file
    <br/>
    Ans: Uniform Resource Locator. A URL is an address of a resource on the Internet. It consists of 4 parts:

    1. Scheme or Protocol, i.e. a set of rules and guidelines
    2. Host or Domain, i.e. the name used to access the website, it could also be an IP address
    3. Path, i.e. the full path of the resource
    4. Query, i.e. URL parameters, a way to pass information using the URL itself.
       <br/>

1.  What is HTTP protocol?
    <br/>
    Ans: HTTP or Hypertext Transfer Protocol is a set of rules for fetching resources on the web. It is based on Client-Server architecture where the request for data is initiated by the client or the user.
    <br/>

1.  What is TCP Protocol?
    <br/>
    Ans: TCP or Transmission Control Protocol enables two hosts to establish a connection and exchange streams of data. It is based on Peer to Peer architecture where no server is required.
    <br/>

1.  Explain all the different HTTP methods?
    <br/>
    Ans: Most commonly used HTTP methods are:

    1. GET: used to find and read or retrieve resources. GET returns response in JSON and in case of success, an HTTP response status code of 200, whereas in case of error, a 404 (NOT FOUND) or 400 (BAD REQUEST).
    2. POST: used to create resources. POST also returns response in JSON similar to GET and in case of success, an HTTP response status code of 201 (created).
    3. PATCH: used to update resources. PATCH takes only the changed or midified data as body and returns, in case of success, an HTTP response status code of 200, whereas in case of error, a 404 (NOT FOUND).
    4. DELETE: used to remove resources. DELETE uses id to remove resource and returns, in case of success, an HTTP response status code of 204 (no content), whereas in case of error, a 404 (NOT FOUND).
    5. PUT: used to update/replace resources. PUT takes the entire reource that is to be changed and returns, in case of success, an HTTP response status code of 200, whereas in case of error, a 404 (NOT FOUND).
    6. HEAD: The HEAD method asks for a response identical to a GET request, but without the response body.
    7. CONNECT: The CONNECT method establishes a tunnel to the server identified by the target resource.
    8. OPTIONS: The OPTIONS method describes the communication options for the target resource.
    9. TRACE: The TRACE method performs a message loop-back test along the path to the target resource.
       <br/>

1.  What are HTTP headers?
    <br/>
    Ans: HTTP headers are a way to pass additional information with an HTTP request or response. Headers could carry information to be added or updated and also information sent by server to client.
    <br/>

1.  What are some HTTP response codes? what does it mean? 2xx, 3xx, 4xx, 5xx
    <br/>
    Ans: An HTTP response code is the server's response to a client's request. When you visit a website, your browser sends a request to the site's server, and the server then responds to the browser's request with a three-digit code, this code summerizes the nature of the response.

    1. Informational responses (100–199)
    2. Successful responses (200–299)
    3. Redirection messages (300–399)
    4. Client error responses (400–499)
    5. Server error responses (500–599)
       <br/>

1.  What does cache control on http response mean?
    <br/>
    Ans: Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses. Policies include how a resource is cached, where it's cached and its maximum age before expiring
    <br/>

1.  What is polling?
    <br/>
    Ans: Polling is a technique that allows the servers to push information to a client.It is a process where a client requests a particular piece of data at regular intervals and the server reverts with a usual response with the required data.
    <br/>

1.  What is long polling?
    <br/>
    Ans: Long polling is a version of traditional polling that allows the server to send data to a client whenever available. It involves the Client requesting intormation from the server in the same way that standard polling does, but with the condition that the server may not respond right away. A complete answer is delivered to the Client once the data is accessible.
    <br/>

1.  What are web sockets?
    <br/>
    Ans: A WebSocket is a persistent connection between a client and server. WebSockets provide a bidirectional, full-duplex communications channel that operates over HTTP through a single TCP/IP socket connection. At its core, the WebSocket protocol facilitates message passing between a client and server.
    <br/>

1.  How is web sockets different from HTTP?
    <br/>
    Ans: Web sockets keep the connection open until closed by client or server, whereas in HTTP, connection is closed after receiving a response.
    <br/>

1.  What is HTTPS?
    <br/>
    Ans: HTTPS is the secure version of HTTP. HTTPS is encrypted in order to increase security of data transfer.
    <br/>

1.  What is Cross Origin Resource Sharing? ( CORS ) Why do we need it?
    <br/>
    Ans: Cross-Origin Resource Sharing or CORS is an HTTP-header that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. We need it to block or to use resources from other port or domain, browsers restrict cross-origin HTTP requests initiated from scripts as a security measure.
    <br/>

1.  What does Access-Control-Allow-Origin header do?
    <br/>
    Ans: Access-Control-Allow-Origin is a CORS (Cross-Origin Resource Sharing) header. Access-Control-Allow-Origin specifies either a single origin which tells browsers to allow that origin to access the resource; or else — for requests without credentials — the " \* " wildcard tells browsers to allow any origin to access the resource. Access-Control-Allow-Origin response header to tell the browser that the content of this page is accessible to certain origins.
    <br/>

1.  What is clickjacking? How do you fix it?
    <br/>
    Ans: Clickjacking is an attack that fools users into thinking they are clicking on one thing when they are actually clicking on another. It is also known as user interface (UI) redressing. Clickjacking is caused due to allowing permission to a third party website to embed the vulnerable site using Iframe. Disallowing this can be done by setting HTTP headers that direct browser to not allow the target website to be iframed. This can be done by configuring server on the following two response headers: X-Frame-Options Content-Security-Policy. It can also be done using JavaScript code that kills the iframe. So the third solutions is: JavaScript code to burst the frame.
    Method 1 and 2.

    ```js
    response.setHeader("X-Frame-Options", "DENY");
    response.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
    ```

    Mehtod 3.

    ```html
    <style>
      /* Hide page by default */
      html {
        display: none;
      }
    </style>
    <script>
      if (self == top) {
        // Everything checks out, show the page.
        document.documentElement.style.display = "block";
      } else {
        // Break out of the frame.
        top.location = self.location;
      }
    </script>
    ```

    <br/>

1.  What are some performance metrics for your website?
    <br/>
    Ans: Page speed is one of the most important metrics. People are impatient and don't like waiting around. Page speed should as fast as possible to retain as large of an audience as possible.

            1. Time to Start Render
                The time it takes from an individual making a request and the amount of time it takes for content to begin loading is called the time to start render.
            2. Time to Interact
                It refers to how much time it takes before individuals can begin to click on links, type in text fields, scroll on a page, and interact in other ways with a website.
            3. Time to First Byte
                It refers to how long it takes for the first bit of personalized information to reach a user’s web browser. Google recommends your TTFB remain under 200 milliseconds or less.
            4. Requests Per Second
                Also referred to as “Throughput” or “Average Load,” this metric refers to the number of requests server receives every second.

    <br/>

1.  What does the following term mean?
    <br/>
    i. Time to first byte,
    <br/>
    Ans: It refers to how long it takes for the first bit of personalized information to reach a user’s web browser. Google recommends your TTFB remain under 200 milliseconds or less.
    <br/>
    ii. Page load time
    <br/>
    Ans: It is the average amount of time it takes for a page to show up on your screen. Page speed is one of the most important metrics.
    <br/>

1.  What do CDN or Content Delivery Networks do? When do you need a CDN?
    <br/>
    Ans: A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. Anybody who has a website or mobile application that's likely to be requested by more than one user at a time can benefit from a CDN. They are especially useful to large, complex websites with users spread across the globe, and websites or mobile apps with lots of dynamic content.
    <br/>

1.  What is the difference between Client Side Rendering and Server Side Rendering?
    <br/>
    Ans: Server-side rendering is the most common method for displaying information onto the screen. It works by converting HTML files in the server into usable information for the browser. Whenever you visit a website, your browser makes a request to the server that contains the contents of the website. where as in Client-side rendering content is rendered in the browser using JavaScript. So instead of getting all of the content from the HTML document itself, you are getting a bare-bones HTML document with a JavaScript file that will render the rest of the site using the browser.
    Both have their pros and cons one of the most impactful difference between them is that initial loading is faster in Server-side rendering while Client-side provides faster rendering after initial load.
    <br/>

1.  What is Progressive Rendering
    <br/>
    Ans: Progressive Rendering is the process of sequentially rendering parts of a webpage on the server and sending it to the client in parts without loading the entire page.
    <br/>

1.  What is the difference between Preloading and Prefetching resources?
    <br/>
    Ans: Preloading is a way to fetch resources immediately or as soon as possible instead of waiting until that resource is needed later in the page.
    Prefetching servers a different purpose as it loads resources for a future navigation to a page linked to the current page
    <br/>

1.  What are service workers?
    <br/>
    Ans: Service workers allow apps to continue functioning offline in case the user loses internet connection. A service worker is a specific type of JS Script, which runs in the background of the user's browser. Service workers are specialized JavaScript assets that act as proxies between web browsers and web servers. They aim to improve reliability by providing offline access, as well as boost page performance.
    <br/>
