// **** Exercise 13 ****

var readLineSync = require("readline-sync");

var userName = readLineSync.question("Hey! What's your name? ");
console.log(
  "Welcome, " + userName + ". Let's play HOW WELL DO YOU KNOW TEJAS?"
);

var score = 0;

var highScores = [
  {
    name: "Tejas",
    score: 5,
  },
  {
    name: "Smitha",
    score: 4,
  },
];

var questionArray = [
  {
    question: "Who is my favourite cricketer? ",
    answer: "MSD",
  },

  {
    question: "What is my favourite breakfast? ",
    answer: "Dosa",
  },

  {
    question: "How many siblings do I have? ",
    answer: "1",
  },

  {
    question: "Which college did I go to? ",
    answer: "SJBIT",
  },

  {
    question: "What is my dream company to work for? ",
    answer: "MS",
  },
];

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    console.log("RIGHT ANSWER! 🎉");
    score += 1;
  } else {
    console.log("WRONG ANSWER! ❌");
  }
  console.log("Your current score -> " + score);
  console.log("-----------");
}

for (i = 0; i < questionArray.length; i++) {
  play(questionArray[i].question, questionArray[i].answer);
}

console.log("Your final score is -> " + score);

if (score >= 4) {
  console.log("Congratulations! You have made it to the high scorers list!");
  highScores.push({
    name: [userName],
    score: score,
  });
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
}

console.log("Check out the high scores!");
console.log("-----------");
for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + " : " + highScores[i].score);
}

// **** Exercise 1 ****

// console.log("Tejas Muthya");

// **** Exercise 2 ****

// var readLineSync = require("readline-sync");

// var userName = readLineSync.question("Can I have your name? ");

// **** Exercise 3 ****

// var welcomeMessage = "Welcome " + userName;
// console.log(welcomeMessage);

// **** Exercise 4 ****

// var readLineSync = require("readline-sync");

// var userName = readLineSync.question("Can I have your name? ");
// var welcomeMessage = "Welcome " + userName;
// console.log(welcomeMessage);

// **** Exercise 5 ****

// var userAge = readLineSync.question("Is my age greater than 18? [y/n or yes/no] ");

// if(userAge.toLowerCase() === "y" || userAge.toLowerCase() === "yes")
//   console.log("right");
// else
//   console.log("wrong");

// **** Exercise 6 ****

// var score = 0;

// var question1 = "Is my hometown Bengaluru? [yes/no] ";
// var answer1 = "yes";

// var userAnswer1 = readLineSync.question(question1);

// if(userAnswer1 === answer1) {
//   score += 1;
//   console.log("Your score is " + score);
// }
// else {
//   score -= 1;
//   console.log("Your score is " + score);
// }

// var question2 = "Is my height greater than 5 feet? [yes/no] ";
// var answer2 = "yes";

// var userAnswer2 = readLineSync.question(question2);

// if(userAnswer2 === answer2) {
//   score += 1;
//   console.log("Your score is " + score);
// }
// else {
//   score -= 1;
//   console.log("Your score is " + score);
// }

// **** Exercise 7 ****

// function addTwo(num1, num2) {
//   return num1 + num2;
// }

// var addResult = addTwo(4, 6);
// console.log(addResult);

// function multiplyTwo(num1, num2) {
//   return num1 * num2;
// }

// var multiplyResult = multiplyTwo(4, 6);
// console.log(multiplyResult);

// **** Exercise 8 ****

// var readLineSync = require("readline-sync");
// var score = 0;

// function checkAnswer(question, answer) {
//   var userAnswer = readLineSync.question(question);
//   if(userAnswer === answer) {
//     score += 1;
//     console.log("You are right! Score -> " + score);
//   }
//   else {
//     score -= 1;
//     console.log("You are wrong! Score -> " + score);
//   }
// }

// var question1 = "Is my name Tejas? ";
// var answer1 = "yes";
// checkAnswer(question1, answer1);

// var question2 = "Where do I work? ";
// var answer2 = "Accenture";
// checkAnswer(question2, answer2);

// **** Exercise 9 ****

// for(i=1;i<6;i++){
//   console.log(i + " Tejas");
// }

// **** Homework ****

// var output = "";

// for(i=1;i<6;i++){
//   for(j=0;j<i;j++){
//     output += "*";
//   }
//   console.log(output);
//   output = "";
// }

// **** Homework Bonus ****

// var output = "";

// for(i=5;i>0;i--){
//   for(j=0;j<i;j++){
//     output += "*";
//   }
//   console.log(output);
//   output = "";
// }

// **** Exercise 10 ****

// var groceryList = ["apples", "scissors", "cookies"];

// groceryList.push("chair");
// groceryList.push("covers");
// groceryList.push("charger");
// groceryList.push("earphones");
// groceryList.push("water bottle");

// console.log(groceryList[0]);
// console.log(groceryList[2]);
// console.log(groceryList[groceryList.length - 1]);

// **** Exercise 11 ****

// for(i=0;i<groceryList.length;i++){
//   console.log(groceryList[i]);
// }

// **** Exercise 12 ****

// var superHero1 = {
//   superman: "Clark Kent"
// }

// console.log(superHero1.superman)

// var superHero2 = {
//   batman: "Bruce Wayne"
// }

// console.log(superHero2.batman)
