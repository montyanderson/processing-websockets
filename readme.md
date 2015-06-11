processing-websockets
=====================

Install
-------

* Install [nodejs](https://nodejs.org/download/), [processing](https://processing.org/download/?processing), and [redis](http://redis.io/download).

* Install required node.js libraries:

``` bash
cd server
npm install # May require root on some systems
```

* Install the [processing redis client](https://github.com/nok/redis-processing), by going to **Sketch -> Import Library -> Add Library** and then searching for redis.

![installing redis processing client](https://i.imgur.com/U2jpQnZ.png)

* Start the server by running:

``` bash
node server.js
```

* You're nearly there! Now run **sketch/sketch.pde** in processing to start the rendering

* Go to **localhost:8080** in you're browser, and you're set!
