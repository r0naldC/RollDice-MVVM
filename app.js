function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

var listOfQuestions = [
    new Question("is this challenge fun?", ["no", "realmente no se", "si"], "si"),
    new Question("what day is today?", ["domingo", "viernes", "martes"], "viernes"),
    new Question("how old is O&M?", [53,25,48], 53)
];

function SelectRandomQuestion() {
    var questionNum = Math.floor(Math.random() * listOfQuestions.length );
    var question = listOfQuestions[questionNum];

    return question;
}

function PrintQuestionOut(randomQuestion) {
    var question = randomQuestion.question

    console.log("\n");
    console.log(question);

    for (var i = 0; i < randomQuestion.answer.length; i++) {
        console.log(i + "- " + randomQuestion.answer[i]);
    }
}

function UserAnswer(randomQuestion) {
    var userAnswer = prompt("Answer the question printed in the console (use the number to answer)");
    var userScore = 0;

    return function() {
        var answer = randomQuestion.answer[userAnswer];
        if(answer === randomQuestion.correctAnswer)
        {
            userScore += 1; 
            console.log("The answer is correct, you earn 1 point");
            console.log("Your score is " + userScore);

        }else{
            console.log("The answer is wrong");
        }

    }
}

var randomQuestion = SelectRandomQuestion();
PrintQuestionOut(randomQuestion);
UserAnswer(randomQuestion)();

