
Now that you have had experience with logging out different types of jokes based on command line arguments, it's time to apply that same concept to a server. In a broad sense, the URL (Universal Resourse Locator) to a webserver is much like the the flags we provided with running our joke printer from the last workshop. To clarify, we can control what content (or type of joke) is delivered to a client's browser based on what application route they are on.

The goal of this workshop is to introduce express.js server initialization and routing. The amount of code needed to complete this workshop is far less than the previous workshop; however, this workshop requires reading a lot of documentation in order for you to be able to complete it without at least referencing the solution branch. That being said, dont worry if you don't complete the workshop in time and feel free to ask Jason or Jonathan for help/clarification if you feel stuck.

## Step 1: Setup

### If you haven't yet, fork this repo and clone it onto your own computer.

### Run `npm install` in your project directory.

## Step 2: Initializing the Server

If you look at your `package.json` file, you'll notice it looks very different from the previous workshop. One diffence is `"start:" "node main"` under "scripts". This addition allows you to run your main.js file (which will eventually initialize and run the server) by running the command `npm start`.

### Before you begin, I recommend you read the express documentation at: http://expressjs.com/en/4x/api.html and this node js http resource: https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/.

### First, you'll want to set up the server object to listen for incoming requests and send them to your app object.

Hint: `server.on()` takes a string `'request'` of what it's listening for and a callback function of what it should do in the case of a request to the server process running on your computer.

### Next, you'll need to set up which port number your server is listening on. You can do this by invoking the listen() funciton on server, which takes a port number and an optional callback function.

Hint: `server.listen(8000, function () {console.log('server listening on port: ' + 8000)})` it's always a good idea to log this so you can see whether or not your sever is running.

## Step 3: Building the Routes

### Before getting started with building the application routes, I recommend you read express routing docs around the header 'Route paths': http://expressjs.com/en/guide/routing.html.

### Now that your server is running you can begin adding api routes for specific content.

#### For each of the joke types you will want the following:

1. A general route for accessing a joke.
2. A route for accessing a capitalized joke.
3. A route for accessing a joke in quotation marks.
4. A route for accessing x jokes.

You can test the success of your server by accessing `localhost:<PORTNUMBER>/<your api route>` in your browser's URL while the server is running.

If you finish and are confident with your implementation, ask one of us to come over and check it over. We'll also suggest more callenging considerations if you feel up for the task.
