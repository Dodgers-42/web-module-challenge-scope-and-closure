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
 *    Just working it out, figuring it out soon....
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
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

function inning(array){
let array = [] 
  for (let i = 0; i < inning.lenght; i++) {
    if (){
      p >= 0; 
    }else
      p =< 2;
  }
    /*Code Here*/

}
inning(points)
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb,num){
let h = 0;
let a = 0;
for ( let i = 0; i <= num; i++){
  h =+ cb;
  a += cb;
}

return {
    "home" : h,
    "Away" : a,
  };
}
console.log(finalScore(inning,9));
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

