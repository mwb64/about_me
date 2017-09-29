'use strict';

var userScore = 0;

var user = prompt('Hi stranger, I\'m Michael. Who might I have the honor of addressing?');
alert('Well welcome' + user + ', I assume your here because you want to get to know me! Soooo....lets make this introduction a guessing game!!!');

var whereFrom = prompt('Was Michael born in Washington? Y/N?').toLowerCase;
console.log('Q1. Was Mike born in Washington? ' + answer + '.');

if (whereFrom === 'no' || 'n' ) {
  userScore++;
} else {
  alert('Nope! He\'s actually from Michigan. He\'s lived here for about 2 1/2 years.');
}
alert('You\'ve guessed correctly' + userScore + ' times.');

var petStatus = prompt('Does Mike have any pets? Y/N?').toLowerCase;
console.log('Q2. Does Mike have any pets? ' + petStatus + '.');

if (whereFrom === 'no' || 'n' ) {
  userScore++;
} else {
  alert('Ohhhh wrong again! He does not. He has lived with lots or roommates who have cats though, so....vicariously livin is he!!!');
}
alert('You\'ve guessed correctly' + userScore + ' times.');
