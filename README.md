# Being Bruce

'Being Bruce' is a technical test which challenges you to create a full-stack, interactive web application, according to the following specification:

## Specification

In the movie Die Hard 3, Bruce Willis is given this task: he has to figure out how to get exactly 4 litres of water in a beaker. He has a tap with running water, a 3 litre beaker and a 5 litre beaker. There is no shortage of water in the tap, but time is limited, so he needs to get to the answer in the minimum number of steps.

Can you create an interactive application which simulates this problem and allows the user to be ‘Bruce Willis’ and try to arrive at the answer by virtually filling the beakers from the tap and pouring them into each other?

The solution should let the user know if he or she has reached the right answer, and have a timer counting down from 5 minutes to zero, at which point the game will stop.

For those of you who like puzzles, you might want to just solve that first. If you’d rather just get on with coding the game, you can just look up the logic of the game at : http://puzzles.nigelcoldwell.co.uk/twentytwo.htm

**Rules**:
* Use any technology, language or tools, but it needs to be your code.
Make it as interactive as possible
* We’d like to see a tested and working application but if for some reason you can’t get it to work perfectly, send us the code anyway
* If you use some very specific and arcane tools, send us instructions on how to run the game
---------------------------

## Installation

```
Fork/clone this repo
$ cd path/to/repo
$ npm install   // installs node_modules
$ jasmine       // run tests and ensure that everything is working
```

To run using the command-line:
```
$ node
$ const Game = require('./src/Game.js')
$ var game = new Game();
$ var smallContainer = new Container(3);
$ var bigContainer = new Container(5);
$ bigContainer.fill();
$ bigContainer.transferFluidTo(smallContainer);
```
and so on...

## Honesty Up Front

I had the misfortune to develop what appeared to be [Labyrinthitis](http://www.nhs.uk/Conditions/Labyrinthitis/Pages/Introduction.aspx) before/during the challenge period, where I was medically advised to rest (which was sensible, because I could hardly see for the vertigo).
This code represents one afternoon of work, where I explored the business logic of the challenge and looked towards extending to the frontend.

## Approach

### Choice of technology
I initially considered Rails, as it quickly provides the means for creating full-stack applications, and particularly because it happily integrates Javascript on the frontend.

I decided against Rails and chose to build a Node.js project, working in vanilla Javascript. The challenge lends itself towards a single page web application where parts of the page can be selectively refreshed. I felt that JS and Node were better suited to making these AJAX requests, particularly if the application were written entirely in JS.

### Objects/Constructors

The mechanics of the game were relatively simple to code for play from the command line, requiring only a single constructor, 'Container'.

The rules of the game will be defined within the Game constructor.

### Improvements/ Next steps

The code is missing a front-end, but has been written to be extensible, mainly by ensuring that a future developer can add containers to a game and can instantiate containers with different capacities.

The next step would be to create a simple single-page interface, served using a lightweight framework (possibly Express). I would expect that much of this code would need to be wrapped in IIFEs (Immediately Invoked Function Expressions), (  ```(function() { code })();``` ) so that it is immediately loaded into the browser when the first HTTP request is made.

The first iteration would use the canvas, and I would use eventListeners and buttons to create simple rectangles on that canvas that can be 'grown' to represent the different volumes of liquid being poured in.

I feel like this would be better coded in a reactive library such as Vue.js, so a further improvement iteration would be written in that, which is much more suited to interactivity.

Hosting would be on **Heroku**, as it is well provisioned for node.js projects and build can be checked at staging before being pushed to production.

**Travis** would be my choice for CI; it integrates well with Heroku and Github.

I have used **ESlint** and the Google JS guidelines for my JS, so that a style-guide is represented and can be used by others should they want to extend my code.
