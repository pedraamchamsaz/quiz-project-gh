const introPage = document.getElementById('intro');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');

function startQuiz() {
    introPage.classList.add('hidden');
    question1.classList.remove('hidden');
}

let i = 1;

function loadNextQuestion() {
    let currentQuestionID = "question" + String(i);
    let nextQuestionID = "question" + String(i + 1);
    let currentQuestion = document.getElementById(currentQuestionID);
    let nextQuestion = document.getElementById(nextQuestionID);
    currentQuestion.classList.add('hidden');
    nextQuestion.classList.remove('hidden');
    i++;
}