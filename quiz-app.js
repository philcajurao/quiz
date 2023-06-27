const questions = [
    {
        question: "Question 1",
        answerChoices: [
            { option: "a. answer1 (Correct Answer)", isCorrect: true },
            { option: "b. answer1", isCorrect: false },
            { option: "c. answer1", isCorrect: false },
            { option: "d. answer1", isCorrect: false }
        ]
    },
    {
        question: "Question 2",
        answerChoices: [
            { option: "a. answer2", isCorrect: false },
            { option: "b. answer2 (Correct Answer)", isCorrect: true },
            { option: "c. answer2", isCorrect: false },
            { option: "d. answer2", isCorrect: false }
        ]
    },
    {
        question: "Question 3",
        answerChoices: [
            { option: "a. answer3", isCorrect: false },
            { option: "b. answer3", isCorrect: false },
            { option: "c. answer3 (Correct Answer)", isCorrect: true },
            { option: "d. answer3", isCorrect: false }
        ]
    }
];

const questionsUI = document.querySelector('h4');
const answers = document.getElementById('answers');
const overallScore = document.getElementById('finalScore');

let countNumber = 0;
let questionNumber = 1;
let score = 0;


const nextButton = (isCorrect) => {
    
    if (isCorrect) {
        score += 1;
    }

    if (countNumber < questions.length - 1) {
        countNumber += 1;
        questionNumber += 1;
        questionsUI.textContent = `${questionNumber}. ${questions[countNumber].question}`;
        answers.innerHTML = "";
        questions[countNumber].answerChoices.map(choice => {
            answers.innerHTML += `<li onclick='nextButton(${choice.isCorrect})'>` + choice.option + "</li>";
        });
    } else {
        overallScore.innerHTML = 
        "<div class='question'><h4>Amazing! Congratulations! Your score is... <h1>" + score + '/' + questions.length + '</h1></h4></div>' +
        "<div class='btn-container' ><button class='rst-btn' onclick='reset()'>Reset</button>";
        overallScore.style.textAlign = 'center';
    }

}

const reset = () => {
    location.reload();
}


questionsUI.textContent = `${questionNumber}. ${questions[countNumber].question}`;

questions[countNumber].answerChoices.map(choice => {
    answers.innerHTML += `<li onclick='nextButton(${choice.isCorrect})'>` + choice.option + "</li>";

});







