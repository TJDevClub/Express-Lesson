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
```JavaScript
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
```
Now, change 3000 to `process.env.PORT`, go back to the terminal and type in `node index.js`.

Visit `https://devclub-express-<username>.c9.io/` in your browser to see the results!

##Customizing
See where it says `res.send('Hello World!');`? You can change the string to whatever you want! Not impressed?

Another thing you can do is make a new **route** with parameters you have access to. 

Try adding this under your first route:
```JavaScript
 app.get('/greet/:name', function(req, res){
   res.send("Hello there, " + req.params.name + ".");
 });
```

Now visit `https://devclub-express-<username>.c9.io/greet/Joe Shmoe` and see what happens. Using this information, what else can you make?

##Command Line and Github

So far, we've been using `node server.js` in the **command line** to run our program. That is an example of a command you're running in your **shell**. The shell is much more powerful. 

First things first, we need to learn how to navigate the file tree. Basically it's the same thing as the sidebar to your left, you can open and close folders and files. There are a few commands you need to know including

  - `ls` - show the current **directory**
  - `cd ____` - change directory to the specified directory
  - `cd ../` - change to the parent directory

Next up, we're going to learn git and github. Git is a **version control system**. Basically, you can use github to store your programs. Think of it like a dropbox for code. 

  - `git status` - See what files have changed recently
  - `git add ____` - add changes in specified file or folder 
  - `git add .` - add changes in every file 

Now that we have added our changes, we need to **commit** to these changes. 

  - `git commit -m "______"` - Fill in the blank with an explanation of what you changed. A sentence or less should do.
  - `git commit --amend -m "_____"` - Fix the last commit if you made a typo or something

Okay so git knows about all of our files and we have committed to the changes, but how do we store these changes in the cloud?

  - First thing we need to do is make a **repository** on github to store everything
    - Name it whatever you want (like `node-lesson`)
    - Do NOT initialize with a README and don't worry about the gitignore/license
  - Follow the directions in the `…or push an existing repository from the command line` section

##HTML
