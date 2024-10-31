const countries = [
    { country: "France", capital: "Paris" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Brazil", capital: "Brasília" },
    { country: "India", capital: "New Delhi" },
    { country: "Australia", capital: "Canberra" },
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Albania", capital: "Tirana" },
    { country: "Algeria", capital: "Algiers" },
    { country: "Bahamas", capital: "Nassau" },
    { country: "Colombia", capital: "Bogota" },
];

let score = 0;
let currentQuestion;

function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

function loadQuestion() {
    currentQuestion = getRandomCountry();
    document.getElementById("country").textContent = currentQuestion.country;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = currentQuestion.capital.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong! The capital of ${currentQuestion.country} is ${currentQuestion.capital}.`;
    }
    document.getElementById("score").textContent = score;
    loadQuestion();
}

window.onload = loadQuestion;
