var readlineSync = require('readline-sync') //importing readline-sync
var score = 0 //variable to store user score

console.log('Welcome to Do you know Vignesh!!')
var username = readlineSync.question('enter your name:\n')
console.log('Welcome ' + username + ", let's check how well you know vignesh.")

var question1 = {
  question: 'where do i live?\n',
  answer: 'udupi',
}

var question2 = {
  question: 'what is my favourite sport?\n',
  answer: 'cricket',
}

var question3 = {
  question: 'Who is my favourite superhero?\n',
  answer: 'Iron man',
}

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log('right!!')
    score = score + 1
  } else {
    console.log('wrong...')
  }
}

question_list = [question1, question2, question3]

for (var i = 0; i < question_list.length; i++) {
  quiz(question_list[i].question, question_list[i].answer)
}
console.log('your score is:' + score)
