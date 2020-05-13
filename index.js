// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *   
 * counter1 is in Function scope.. it can only effect inside the function..
 * counter2 in the Global scope, can be used Global (giant function)
 * 2. Which of the two uses a closure? How can you tell?
 * They both closure, cuz they have access to elements they need to run. counter1 has varibles within its function, and counter2 needs to be used elsewhere in the global scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 would be best if you needed to manipulate a number several times in order to get the correct outcome: if you needed to add to the beginning number, then multiply the newly created number.
 * Counter2 would be best if you needed your number to always start at zero when using the function.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
let randomNum=Math.round(Math.random()*2);
  

};
inning();
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback,inningNum){
let scores={};

let homeTeam = 0;
let awayTeam = 0;
for ( let i = 0; 1 <= num; i++){}

  Home =+ callback;
  Away += callback;


return {
  "Home" : home,
  "Away" : away,
  };
    
};
console.log(finalScore(inning,2));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cd,innNum) {
 let score = {
   "Home":0,
   "Away":0,
 }
 let scorearray = [];
 //Looks outward for score and then increases appropriate amount and returns
 for( let i = 1; i<= innNum; i++){
   score["Home"] += cb(0,2);
   score["Away"] += cb(0,2);
   if (i === 1){
     scorearray.push (`1st: inning: ${score["Home"]} - ${score["Away"]}`);
   }
   else if(i === 2){
    scorearray.push (`2nd: inning: ${score["Home"]} - ${score["Away"]}`);
   }
   else if(i === 3){
    scorearray.push (`3rd: inning: ${score["Home"]} - ${score["Away"]}`);
   }
   else{
    scorearray.push (`[i]th: inning: ${score["Home"]} - ${score["Away"]}`);
   }
 }
 console.log(scorearray)
}
scoreboard(inning, 9);

