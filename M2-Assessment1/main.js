var name;
var institution;
var githubusername;

var arrCatagories = [
    'Best Consumer Solution',
    'Best Enterprise Solution',
    'Best African Solution',
    'Most Innovative Solution',
    'Best Gaming Solution',
    'Best Health Solution',
    'Best Agricultural Solution',
    'Best Educational Solution',
    'Best Financial Solution',
    'Best Hackathon Solution',
    'Best South African Solution',
    'Best Campus Cup Solution',
    'Hawaii category'
];
 // Question A
function logInformation() {
    name = prompt('Please enter your name:');
    institution = prompt('Your current institution:');
    githubusername = prompt('Enter your github username:');

    console.log('My name is ' + name + ', a student from ' + university + ' and my Github username is ' + githubusername);
} 
 // Question B
function diceRandomizer() {
    var dice;
    var total;
    var winner;

    dice = Math.floor(Math.random() * 13) + 1;

    console.log(dice);

    total = dice;
    winner = arrCatagories[total];

    console.log(winner);
    alert(winner);
}
