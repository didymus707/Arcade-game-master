# Nanodegree-Arcade-Game
===============================

## Objective
To use object oriented programming tools such as classes and the this keyword in making a game

## About The Game

This game contains three javascript file which are the app.js that contains the codes for the working of the game which depends on engine and resources.js to work which was provided by Udacity. It also contains a stylesheet and an HTML file. These files depend on each other to work.

## How It Runs

### The app.js contians the following;
***

+ An enemy function is created which is used in instantiating our enemy objets
+ A protoype was also created which is used for updating the movement of our enemies in the canvas and when they are coming back in after going out
+ Also, a render function was provided which was used in rendering our images and also updates the result of our update function on the canvas
+ A player class was also created for where we instantiated our new player object character.
+ An event listener that handles the directional keys for moving the player on the canvas.
+ The engine and the resources.js contains some variables and IIFEs that makes our game work.


## How To Play The Game

A player moves across a canvas full of bugs and avoids them in order to get to the river. If he gets there without being hit by a bug, then he wins, but if he is touched by the bugs, he is returned to its starting position. The player must use the directional keys to control the character in order to win the game.
