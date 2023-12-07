const introPage = document.getElementById('intro');
const question1 = document.getElementById('question1')

function startQuiz() {
    introPage.classList.add('hidden');
    question1.classList.remove('hidden');
}