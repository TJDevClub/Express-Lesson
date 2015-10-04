#NodeJS and Express

Welcome to week 2 of Dev Club! Today we are going to learn backend JavaScript (NodeJS) and a web framework called Express. 


##Setup
To get started, make a github account if you don't already have one. 

Then go to http://c9.io and click sign in with github. 

Next, make a workspace, call it `devclub-express`, don't worry about the description, don't clone it from a URL, and click Node.js as the template. 

##NodeJS Hello World
Enter the workspace and in the terminal at the bottom type in `npm init`
 - Use the name `devclub-express`
 - Default version
 - Whatever description you want
 - Default entry point
 - No test command
 - No git repository
 - No keywords
 - Your name as author
 - Default license
 - Click yes

Then, in the terminal again, type `touch index.js`. Open the file that was created and type in `console.log("Hello Node!")`. Go back to the terminal and type in `node index.js` to make sure everything works. 

##Express Framework Hello World
In the terminal, type in `npm install express --save`. 

Then go back to `index.js` and copy and paste this code in:

    var express = require('express');
    var app = express();
    
    app.get('/', function (req, res) {
      res.send('Hello World!');
    });
    
    var server = app.listen(3000, function () {
      var host = server.address().address;
      var port = server.address().port;
    
      console.log('Example app listening at http://%s:%s', host, port);
    });
    
Now, change 3000 to `process.env.PORT`, go back to the terminal and type in `node index.js`.

Visit `https://devclub-express-<username>.c9.io/` in your browser to see the results!

