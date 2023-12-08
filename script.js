const introPage = document.getElementById('intro');
const question1 = document.getElementById('question1');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const resultsElement = document.getElementById('results');
const messageElement = document.getElementById('message');
const videoElement = document.getElementById('video');
const lastQuestion = document.getElementById('question10');
const resultsPage = document.getElementById('final-page');

function startQuiz() {
    introPage.classList.add('hidden');
    question1.classList.remove('hidden');
    document.getElementById('answer-buttons1').classList.remove('hidden');
    // startTimer();
}

let x = 1;

function selectAnswer() {
    nextButton.classList.remove('hidden');
    let currentAnswerID = "answer-buttons" + String(x);
    let currentAnswer = document.getElementById(currentAnswerID);
    currentAnswer.classList.add('hidden');
    x++;
}

let i = 1;

function loadNextQuestion() {
    let currentQuestionID = "question" + String(i);
    let nextQuestionID = "question" + String(i + 1);
    let currentQuestion = document.getElementById(currentQuestionID);
    let nextQuestion = document.getElementById(nextQuestionID);
    nextButton.classList.add('hidden');
    document.getElementById('answer-buttons' + x).classList.remove('hidden');
    currentQuestion.classList.add('hidden');
    nextQuestion.classList.remove('hidden');
    i++;
}

let score = 0;
function correctAnswer() {
    score++;
    resultsElement.innerText = score;
    console.log(score);
    if (score < 5) {
        videoElement.src = "https://y.yarn.co/473f5d17-8d29-49ca-9bc5-6e6695e6efc9.mp4";
    }
    else if (score < 8) {
        videoElement.src = "https://y.yarn.co/84f6a265-6947-4ee5-80fa-e1b27a173807.mp4";
    }
    else if (score < 10) {
        videoElement.src = "https://y.yarn.co/1977c7e4-adb1-4b31-81e0-42ea6ad30966.mp4";
    } else {
        videoElement.src = "https://y.yarn.co/40d4682f-0b5d-4855-83a4-bc2a466c3406.mp4";
    }
}

function loadResultsPage() {
    lastQuestion.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    videoElement.play();
}

function playAgain() {
    score = 0;
    i = 1;
    x = 1;
    videoElement.pause();
    startQuiz();
}


// let count = 10;

// function startTimer() {
//     const timer = setInterval(function() {
//         count--;
//         timerElement.innerText = count;
//         if (count === 0) {
//             clearInterval(timer);
//             loadNextQuestion();
//         }
//     }, 1000);
// }