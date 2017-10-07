'use strict';

var userScore = 0;
//User score response options
var scoreAlert = [];
scoreAlert[0] = 'You\'ve guessed correctly ' + userScore + ' time(s).';
scoreAlert[1] = alert('Thanks for playing ' + user + '! Your ending score is' + userScore + '.');

//QUESTION 1. components
var question1 = [];
//Prompt question to get the "users" name
question1[0] = prompt('Hi stranger, I\'m Michael. Who might I have the honor of addressing?');
//Alert statement
question1[1] = 'Welcome  ' + user + '! I assume your here because you want to get to know me! Soooo....lets make this introduction fun with a guessing game!!!';
//Console.log statement
question1[2] = 'You\'ll be joined by ' + user + ' for this game.';
//QUESTION 1 - USER'S Name
var user = question1[1];
alert(question1[2]);
console.log(question1[3]);

function question1(){
  //QUESTION 1 components
  var question2 = [];
  //Prompt question
  question2[0] = prompt('Was Michael born in Washington? Y/N?').toLowerCase();
  //Console.log statement
  question2[1] = 'Q2. Was Mike born in Washington? User says: ' + whereFrom + '.';
  //QUESTION 2 - yes/no: Is Michael's from Washington. Adjusts response to lower case.
  var whereFrom = question2[0];
  console.log(question2[1]);

  if (whereFrom === 'no' || whereFrom === 'n') {
    userScore++;
  } else {
    alert('Nope! He\'s actually from Michigan. He\'s lived here for about 2 1/2 years.');
    userScore = 0;
  };

  alert(scoreAlert[0]);
};
question1();

function question2(){
  //QUESTION 2 components
  var question3 = [];
  question3[0] = prompt('Does Mike have any pets? Y/N?').toLowerCase();
  //Console.log statement
  question3[1] = 'Q3.Does Mike have any pets? User says: ' + petStatus + '.';
  //QUESTION 3 - yes/no: Does Michael have any pets. Admjusts response to lower case.
  var petStatus = question3[0];
  console.log(question3[1]);

  if (petStatus === 'no' || petStatus === 'n' ) {
    userScore++;
  } else {
    alert('Ohhhh wrong again! He does not. He has lived with lots of roommates who have cats though, so....vicariously livin is he!!!');
    userScore = 0;
  }

  alert(scoreAlert[0]);

};
question2();

function question3(){
  //QUESTION 3 components
  var question4 = [];
  //prompt question
  question4[0] = prompt('Would Mike volunteer to live on Mars? Y/N?').toLowerCase();
  //console.log statement
  question4[1] = 'Q4. Mike wants to be a Martian? User says: ' + martian + '.';
  //QUESTION 4 - yes/no: Would Michael become a martian. Adjusts response to lower case.
  var martian = question4[0];
  console.log(question4[1]);

  if (martian === 'yes' || martian === 'y' ) {
    userScore++;
  } else {
    alert('Actually, he wouldn\'t be opposed to the idea. I mean it would be kinda cool right!?!?!');
    ;
  }
  alert(scoreAlert[0]);
};
question3();

function question4(){
  //QUESTION 4 components
  var question5 = [];
  //Q1 question prompt
  question5[0] = prompt('Does Mike enjoy coding? Y/N?').toLowerCase();
  //Console.log statement
  question5[1] = 'Q5. Mike enjoys coding at this point? User says: ' + codeLove + '.';
  //QUESTION 5 - yes/no: Does michael enjoy coding. Adjusts response to lower case.
  var codeLove = question5[0];
  console.log(question5[1]);

  if (codeLove === 'yes' || codeLove === 'y' ) {
    userScore++;
  } else {
    alert('So far he does.....so far...ask me again later.');
    userScore = 0;
  }

  alert(scoreAlert[0]);
};
question4();

function question5(){
  //QUESTION 5 components
  var question6 = [];
  //Q1 question prompt
  question6[0] = prompt('Does Mike love pie more than cake? Y/N?').toLowerCase();
  //Console.log statement
  question6[1] = 'Q4. Mike enjoys pie? User says: ' + pieLove + '.';
  //QUESTION 6 - yes/no: Does michael enjoy coding. Adjusts response to lower case.
  var pieLove = question6[0];
  console.log(question6[1]);

  if (pieLove === 'yes' || pieLove === 'y' ) {
    userScore++;
  } else {
    alert('Of course he does! Pie is obvously better than cake.');
    userScore = 0;
  };
};
question5();

function question6(){
/*QUESTION 6 Question that requires the user asks the user to guess a number from 1 to 5 and converts the answer to a number. User gets four tries. the While Loop ends when they guess the correct number.*/
var luckyGuess = 3;
var mindFreak = parseInt(prompt('Lets try and read Mikes mind, you only get 4 tries and can only use whole numbers. He\'s thinking of a number between 1 and 5? What is it!?!?!'));
var notCorrect = 5;
var isCorrect = false;

while (isCorrect === false && (notCorrect > 1)){
  console.log('Inside of while loop.')
  if(mindFreak === 3){
   alert('Lucky guess.....');
    userScore++;
    mindFreak = luckyGuess;
    isCorrect = true;
} else if( mindFreak < 3){
  notCorrect--;
    alert('Thats to low, lets give it another try. You have ' + notCorrect + ' tries left!');
    mindFreak = prompt('He\'s thinking of a number between 1 and 5? What is it!?!?!');
  } else if( mindFreak > 3){
    notCorrect--;
    alert('Thats to high, lets give it another go. You have ' + notCorrect + ' tries left!');
    mindFreak = prompt('He\'s thinking of a number between 1 and 5? What is it!?!?!');
  scoreAlert[1];
};
question6();

function question7(){
  var carsOwned =['ford','alfa romeo','buick']
var notCorrect = 6;
var car1 = carsOwned[0];
var car2 = carsOwned[1];
var car3 = carsOwned[2];
var carMake = prompt('Can you guess the Make of one of the cars Michael has own? Hint: One is a foreign model that is recent to the US after a long break.').toLowerCase;

while (notCorrect > 0){
  if(carsOwned.indexOf(carMake) > -1){
     alert('Thats right! all the cars I\'ve owned include a ' + car1 + ', ' + car2 + ', ' + car3 + '.' );
    userScore++;
    notCorrect = 0;
  } else{
    carMake = prompt('Nope, thats not on the list, guess again. You have ' + notCorrect + ' tries left.');
    notCorrect--;
  }
};
};
question7();
