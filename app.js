function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

var listOfQuestions = [
    new Question("is this challenge fun?", ["no", "realmente no se", "si"], "si"),
    new Question("what day is today?", ["domingo", "sabado", "martes"], "sabado"),
    new Question("how old is O&M?", [53,25,48], 53)
];

function SelectRandomQuestion() {
    var questionNum = Math.floor(Math.random() * listOfQuestions.length );
    var question = listOfQuestions[questionNum];

    return question;
}

function PrintQuestionOut() {
    var randomQuestion = SelectRandomQuestion();

    if(listOfQuestions.length === 0)return console.log("There's not more question, Game Ends");
    
    var question = randomQuestion.question;

    console.log("\n");
    console.log(question);

    for (var i = 0; i < randomQuestion.answer.length; i++) {
        console.log(i + "- " + randomQuestion.answer[i]);
    }

    userAnswer(randomQuestion);
}

function UserAnswer() {
    var userScore = 0;

    return function(randomQuestion) {
        var userAnswer = prompt("Answer the question printed in the console (use the number to answer)");
        if(userAnswer !== "exit")
        {
            var answer = randomQuestion.answer[userAnswer];
            if(answer === randomQuestion.correctAnswer)
            {
                userScore += 1; 
                console.log("The answer is correct, you earn 1 point");
                console.log("Your score is " + userScore);
                listOfQuestions.splice(listOfQuestions.indexOf(randomQuestion),1);

            }else{
                console.log("The answer is wrong");
            }
            NextQuestion();

        }else{
            console.log("Game Ends");
        }
    }
}

function NextQuestion() {
    PrintQuestionOut();
}

var userAnswer = UserAnswer();
NextQuestion();