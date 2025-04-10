const questions = [
    { question: "Is Javascript een programeer taal", answers: ["True", "False"], correct: 1 },
    { question: "kan je met css een robot besturen?", answers: ["True", "False"], correct: 1 },
    { question: "Is water nat?", answers: ["True", "False"], correct: 0 },
    { question: "Welke kleur krijg je als je blauw en geel mengt?", answers: ["Rood", "Groen", "Paars"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionObj = questions[currentQuestion];
    document.getElementById("question").textContent = questionObj.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    questionObj.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.className = "btn";
        btn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }
    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("next").style.display = "none";

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-container").innerHTML = `<h1>Je score: ${score} / ${questions.length}</h1>`;
}

loadQuestion();