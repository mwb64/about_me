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

/*function question6(){
  /*QUESTION 7 Question that requires the user to "guess what I'm thinking". Askes user to guess a number between 1 and 5.
   Randomly changes number so its different each time.
  var mindFreak = promp('Lets try and read Mikes mind. He\'s thinking of a number between 1-5? What is it!?!?!');
  console.log( user + ' Is trying to guess a random number between 1 - 5')
  if (mindFreak ===)
  scoreAlert[1];
};
question6();
*/
