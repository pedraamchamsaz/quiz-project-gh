const introPage = document.getElementById('intro');
const question1 = document.getElementById('question1');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    introPage.classList.add('hidden');
    question1.classList.remove('hidden');
}

function selectAnswer() {
    nextButton.classList.remove('hidden');
}

let i = 1;

function loadNextQuestion() {
    let currentQuestionID = "question" + String(i);
    let nextQuestionID = "question" + String(i + 1);
    let currentQuestion = document.getElementById(currentQuestionID);
    let nextQuestion = document.getElementById(nextQuestionID);
    nextButton.classList.add('hidden');
    currentQuestion.classList.add('hidden');
    nextQuestion.classList.remove('hidden');
    i++;
}