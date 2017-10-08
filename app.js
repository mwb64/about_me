'use strict';

var userScore = 0;
//Player Name Prompt
var user = prompt('Ohh...hello there stranger, what might your name be?');
alert('Welcome  ' + user + '! I assume your here because you want to get to know me! Soooo....lets make this introduction fun with a guessing game!!!');
console.log('The username for the player is ' + user + '.');

//QUESTION 1 - Prompts the user to guess if I'm from WA.

function question1(){
  //QUESTION 1 components
  var whereFrom = prompt('Was Michael born in Washington? Y/N?').toLowerCase();
  console.log('Is Michael from Washingtion? ' + whereFrom + '.');

  if (whereFrom === 'no' || whereFrom === 'n') {
    userScore++;
  } else {
    alert('Nope! He\'s actually from Michigan. He\'s lived here for about 2 1/2 years.');
    userScore = 0;
  }
  alert('You\'ve guessed correctly ' + userScore + ' time(s).');
}
question1();

//QUESTION 2
function question2 (){
  var petStatus = prompt('Does Mike have any pets? yes/no?').toLowerCase();
  console.log('Q2.Does Mike have any pets? User says: ' + petStatus + '.');

  if(petStatus === 'no' || petStatus === 'n'){
    userScore++;
  }else {
    alert ('Nope. He has lived with lots of roommates who have cates though, so.. vicariously livin I suppose.');
  };
  alert('You have guessed correctly ' + userScore + ' time(s).');
}
question2();

function question3 (){
  var martian = prompt('Would Mike volunteer to live on Mars? yes/no?').toLowerCase();
  console.log('Q3.Mike wants to be a Martian? User says: ' + martian + '.');

  if(martian === 'yes' || martian === 'y'){
    userScore++;
  }else {
    alert (' Actually, he wouldn\'t be opposed to the idea. I mean it would be kinda cool right!?!?');
  }
  alert('You have guessed correctly ' + userScore + ' time(s).');
}
question3();

function question4(){
  var codeLove = prompt('Does Mike enjoy coding? yes/no?').toLowerCase();
  console.log('Q4.Mike wants to be a Martian? User says: ' + codeLove + '.');

  if(codeLove === 'yes' || codeLove === 'y'){
    userScore++;
  }else {
    alert ('So far I do....ask me again in a few weeks.');
  };
  alert('You have guessed correctly ' + userScore + ' time(s).');
}
question4();

function question5(){
  var pieLove = prompt('Does Mike love pie more than cake? yes/no?').toLowerCase();
  console.log('Q5. Does Michael prefer Pie? User says: ' + pieLove + '.');

  if(pieLove === 'yes' || pieLove === 'y'){
    userScore++;
  }else {
    alert ('So far I do....ask me again in a few weeks.');
  };
  alert('You have guessed correctly ' + userScore + ' time(s).');
}
question5();

//QUESTION 6
var question6 = function(){
  var luckyGuess = 3;
  var notCorrect = 5;
  var isCorrect = false;

  var mindFreak = parseInt(prompt('Lets try and read Mikes mind, you only get 4 tries and can only use whole numbers. He\'s thinking of a number between 1 and 5? What is it!?!?!'));

  while (isCorrect === false && (notCorrect > 1)){
    console.log('Inside of while loop.');
    if(mindFreak === 3){
      alert('Lucky guess.....');
      userScore++;
      mindFreak = luckyGuess;
      isCorrect = true;
    } else if( mindFreak < 3){
      notCorrect--;
      alert('Thats too low, lets give it another try. You have ' + notCorrect + ' tries left!');
      mindFreak = prompt('He\'s thinking of a number between 1 and 5? What is it!?!?!');
    } else if( mindFreak > 3){
      notCorrect--;
      alert('Thats to high, lets give it another go. You have ' + notCorrect + ' tries left!');
      mindFreak = prompt('He\'s thinking of a number between 1 and 5? What is it!?!?!');
    }
  }
  if(notCorrect === 0 && (mindFreak !== luckyGuess)){
    alert('Thats incorrect and your out of guesses. Guess your no Dr. X.');
  };
  alert('You have guessed correctly ' + userScore + ' time(s).');
};
question6();

//QUESTION 7
var question7 = function(){
  var carsOwned = ['ford','alfa romeo','buick'];
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
  if(notCorrect === 0 && (carMake !== isCorrect)){
    alert('Thats not correct and your out of tries (sad face).');
  };
  alert('You have guessed correctly ' + userScore + ' time(s).');
};
question7();
