var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to - DO YOU KNOW RUDRA? \n");

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You're right!!");
    score++;
  }
  else{
    console.log("You're wrong!!");
    score--;
  }
  console.log("Current Score: ", score);
  console.log("---------------------------")
}

var quesOne = {
  question: "Where do I live? \n",
  answer: "Nagpur"
}

var quesTwo = {
  question: "What is my age? \n",
  answer: "22"
}

var quesThree = {
  question: "Who is my favourite superhero? \n",
  answer: "Shaktiman"
}

var quesFour = {
  question: "Which movie is my favourite? \n",
  answer: "Fight Club"
}

var quesFive = {
  question: "Who is my favourite musical artist? \n",
  answer: "Kanye West"
}

var questions = [quesOne, quesTwo, quesThree, quesFour, quesFive]

for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("\nFinal Score: ", score);

console.log("---------------------------");
console.log("\nLEADERBOARD")
var highScore = [
  {name : "RUDRA",
  score : 5,},
  {name : "ASHUTOSH",
  score : 4,},
  {name : "ATHARVA",
  score : 3}
]
console.log("----------------------------");
for (var j=0 ; j<highScore.length ; j++)
{var currentHighScore = highScore[j]
  console.log(currentHighScore.name + " : " + currentHighScore.score + "\n");
}

console.log("If you have beaten the highscore, send me a screenshot and I'll update the LEADERBOARD!" + "\n");
console.log("Thank you " + userName + " for playing!")