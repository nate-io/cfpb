<img src='https://upload.wikimedia.org/wikipedia/commons/b/bb/CFPB_logo.svg' alt='Official CFPB Logo'>

<h1 style='padding-top:50px;'>NOCLIST Dev Assessment</h1>

<h2 style='color:#20aa3f'>Applicant ID:  2698163</h2>

# To Run

1. Install Docker
2. Run example server
   1. ```docker pull adhocteam/noclist```
   2. ```docker run --rm -p 8888:8888 adhocteam/noclist```
3. Run solution
   1. ```npm i```
      1. note: current base LTS or higher (v14.5) is required else this command will fail
   2. ```npm start``` to run 
   3. ```npm test``` to execute test suite

# Structure
A guided tour to help parse the solution a bit faster:

```
.
+-- index.js            // entry, functionality lives in src
+-- src
|   +-- api.js          // network calls and attendant functionality
|   +-- api.test.js
|   +-- config.js       // for live runs                 
|   +-- testConfig.js   // reusable test vars & mock server
|   +-- utils.js        // helper functions
|   +-- utils.test.js
+-- .github             // pr template & CI config
+-- .npmrc              // enforce node engine defined in package.json
```

# Notes

Just a few notes here to wrap up! The general rationale behind the solution was to create developer friendly function calls which are easy to consume which can be seen in how slim `index.js` is - it doesn't appear much special handling is occurring. I leaned exclusively on functional style programming.

Going a bit deeper I sought to break apart the functionality into discrete layers with a focus on doing one thing well at each layer. For a given call the descending flow is:

1. UI 
2. controller function (functions prepended with `get-` in `api.js`)
   1. reusable helpers implementing a piece of discrete business logic
   2. call network functions
   3. extract & format network data before returning
3. network function (functions prepended with `fetch-` in `api.js`)
   1. stores config for the network call
   2. usually executes network call but instead delegates to resilientFetch()
4. network execution (`resilientFetch`)
   1. this is the retry function which implements error handling as well as the requested retry logic 