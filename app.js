function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

var listOfQuestions = [
    new Question("is this challenge fun?", ["no", "realmente no se", "si"], "si"),
    new Question("what day is today?", ["domingo", "jueves", "martes"], "jueves"),
    new Question("how old is O&M?", [53,25,48], 53)
];

function PrintQuestionOut() {
    var qustionNum = Math.floor(Math.random() * listOfQuestions.length );
    var question = listOfQuestions[qustionNum].question

    console.log(question);

    for (var i = 0; i < listOfQuestions[qustionNum].answer.length; i++) {
        console.log(i + "- " + listOfQuestions[qustionNum].answer[i]);
    }
}

PrintQuestionOut();
