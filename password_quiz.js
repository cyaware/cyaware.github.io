const allQuestions = [
    { question: "What is the recommended minimum length for a strong password?", options: ["6 characters", "8 characters", "12 characters", "16 characters"], answer: 2 },
    { question: "Which of these is an example of a strong password?", options: ["password123", "123456", "Qwerty!23", "admin"], answer: 2 },
    { question: "Why is it important to use unique passwords for different accounts?", options: ["To make them easier to remember.", "To reduce the risk of multiple accounts being compromised.", "To avoid password expiration.", "None of the above."], answer: 1 },
    { question: "What is a password manager?", options: ["A tool that generates and stores strong passwords.", "A tool to monitor password usage.", "A tool to encrypt emails.", "None of the above."], answer: 0 },
    { question: "Which practice enhances password security?", options: ["Using personal information in passwords.", "Sharing passwords with trusted friends.", "Enabling two-factor authentication.", "Using the same password across multiple sites."], answer: 2 },
    { question: "What is a passphrase?", options: ["A long string of random letters.", "A sequence of random numbers.", "A combination of random, memorable words.", "An automatically generated password."], answer: 2 },
    { question: "How often should you change your passwords?", options: ["Every 6 months.", "Every time there is a security concern.", "Every 2 years.", "Never."], answer: 1 },
    { question: "What is the main advantage of multi-factor authentication?", options: ["It makes passwords unnecessary.", "It adds an extra layer of security.", "It simplifies login processes.", "None of the above."], answer: 1 },
    { question: "Which of these is a bad password habit?", options: ["Using strong, unique passwords.", "Storing passwords in a password manager.", "Reusing passwords across multiple accounts.", "Enabling two-factor authentication."], answer: 2 },
    { question: "What should you do if a website has a password breach?", options: ["Change your password immediately.", "Ignore it.", "Use the same password again.", "Wait until you are notified."], answer: 0 },
    { question: "What is a dictionary attack?", options: ["An attack that encrypts your data.", "An attack using a list of common passwords.", "An attack on a web server.", "None of the above."], answer: 1 },
    { question: "Which is NOT a strong password practice?", options: ["Using random numbers and symbols.", "Avoiding dictionary words.", "Including personal details.", "Using at least 12 characters."], answer: 2 },
    { question: "Why is using personal information in passwords risky?", options: ["It makes the password too long.", "It increases the chances of guessing.", "It complicates password recovery.", "None of the above."], answer: 1 },
    { question: "What should you do if you forget your password?", options: ["Click on 'Forgot Password' to reset it.", "Try all possible passwords.", "Guess until it works.", "Stop using the account."], answer: 0 },
    { question: "Which is the safest way to store your passwords?", options: ["Writing them in a notebook.", "Saving them in your browser.", "Using a password manager.", "Memorizing all of them."], answer: 2 }
];

let questions = [];
while (questions.length < 10) {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    if (!questions.includes(allQuestions[randomIndex])) {
        questions.push(allQuestions[randomIndex]);
    }
}

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question-text");
    const options = document.querySelectorAll(".option");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.classList.remove("correct", "wrong");
        option.disabled = false;
    });

    document.getElementById("prev-btn").style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
    document.getElementById("next-btn").style.display = "none";
}

function selectOption(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        option.disabled = true;
        if (index === correctAnswer) {
            option.classList.add("correct");
        }
    });

    if (selectedIndex !== correctAnswer) {
        options[selectedIndex].classList.add("wrong");
    } else {
        score++;
    }

    document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions = [];
    while (questions.length < 10) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        if (!questions.includes(allQuestions[randomIndex])) {
            questions.push(allQuestions[randomIndex]);
        }
    }
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});
function toggleMenu() {
    const menu = document.getElementById("sidebar");
    
    // Toggle the 'display' style between 'none' and 'block'
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}