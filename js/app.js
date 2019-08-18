function QuestionApp() {
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

  return {
    question: randomQuestion,
    display: displayQuestion
  }
}

var API = QuestionApp();

 var selectedQuestion  = API.question();
 API.display(selectedQuestion);

var respond = prompt();

var message = selectedQuestion.correctAnswer === Number(respond) ? "Correct" : "Incorrect";
1
console.log(message);


