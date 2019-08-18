function QuestionApp() {
  var score = 0;
  var selectedQuestion = null;

  function Question(question, options, correctAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  var questionList = [
    new Question("¿Cuál es la capital de México?", ["Puerto", "Santo Domingo", "Mexico City"], 3),
    new Question("¿Cuál es la capital de Haiti?", ["Puerto Principe", "Santo Domingo", "Mexico City"], 1),
    new Question("¿Cuál es la capital de RD?", ["Puerto", "Santo Domingo", "Mexico City"], 2),
    new Question("¿Cuál es la capital de EUU?", ["Washington, D.C.", "Santo Domingo", "DC"], 1),
    new Question("¿Cuál es la capital de Brasil?", ["Puerto", "Brasilia", "Mexico City"], 2)
  ];
  
  function randomQuestion() {
    var totalQuestion = questionList.length;
    var random = Math.floor(Math.random() * totalQuestion);
    return questionList[random];
  }
    
  function displayQuestion(question) {
    console.log(question.question);
    question.options.forEach(function(q, index) {
      console.log((index + 1) + " : " + q)
    });
  }

  function displayScore() {
    console.log("You're Current Score is: " + score);
    console.log("-----------------------------------")
  }

  function incrementScore() {
    return function() {
      return ++score;
    }
  }

  function randomQuestionDisplay() {
    selectedQuestion  = randomQuestion();
    displayQuestion(selectedQuestion);
  }

  function checkAnswer(userAnswer) {
    if(selectedQuestion.correctAnswer === Number(userAnswer)) {
      console.log("Correct"); 
      incrementScore()();
      return;
    } 
  
    console.log("Incorrect");
  }

  return {
    displayScore: displayScore,
    displayRandomQuestion: randomQuestionDisplay,
    verifyAnswer: checkAnswer
  }
}


var API = QuestionApp();

var respond = "";


do {
  API.displayRandomQuestion();
  respond = prompt();
  API.verifyAnswer(respond);
  API.displayScore();
}
while(respond != "exit")


console.log("********** Thanks for play **********");
 






