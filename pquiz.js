const allQuestions = [
    { question: "What is phishing?", options: ["A legitimate email asking for sensitive information.", "A fraudulent attempt to obtain sensitive data.", "A form of network attack.", "A method of encrypting emails."], answer: 1 },
    { question: "Which of the following is a sign of a phishing email?", options: ["An email with a reputable domain like '@gmail.com'.", "Generic greetings like 'Dear Customer'.", "An offer for free prizes without conditions.", "Both B and C."], answer: 3 },
    { question: "What should you do if you receive a suspicious email?", options: ["Click the link to verify its legitimacy.", "Ignore it and report to the appropriate authority.", "Reply to the sender asking for clarification.", "Forward it to your friends for awareness."], answer: 1 },
    { question: "Which is the best way to verify a suspicious link?", options: ["Click it and check where it leads.", "Check the link preview by hovering over it.", "Forward it to IT support without checking.", "Ignore it entirely."], answer: 1 },
    { question: "What is a common phishing tactic?", options: ["Using fake websites to collect data.", "Encrypting emails for security.", "Developing mobile apps.", "None of the above."], answer: 0 },
    { question: "How can you recognize a phishing attempt?", options: ["Spelling errors in the email.", "Urgent or threatening language.", "Requests for personal information.", "All of the above."], answer: 3 },
    { question: "What should you do if a website asks for your password?", options: ["Provide it immediately.", "Verify the website's authenticity.", "Share it with colleagues.", "None of the above."], answer: 1 },
    { question: "Why is HTTPS important in web addresses?", options: ["It ensures a secure connection.", "It allows for faster loading times.", "It is required for all email links.", "It indicates a phishing website."], answer: 0 },
    { question: "What is spear phishing?", options: ["A targeted phishing attack.", "A phishing attempt via social media.", "An email from a trusted source.", "A method of encrypting sensitive emails."], answer: 0 },
    { question: "How can you avoid phishing scams?", options: ["Enable email filters.", "Verify sources of communication.", "Avoid clicking on unknown links.", "All of the above."], answer: 3 },
    { question: "What is the purpose of a phishing attack?", options: ["To steal sensitive information.", "To send spam messages.", "To encrypt files for ransomware.", "None of the above."], answer: 0 },
    { question: "What is a common feature of phishing emails?", options: ["A professional logo.", "Typos and grammatical errors.", "Personalized greetings.", "None of the above."], answer: 1 },
    { question: "What should you do if a link appears suspicious?", options: ["Click to verify its authenticity.", "Forward it to IT support.", "Hover over it to inspect the URL.", "Ignore and delete it."], answer: 2 },
    { question: "How can you protect your passwords from phishing?", options: ["Use multifactor authentication.", "Never share passwords.", "Only enter passwords on secure websites.", "All of the above."], answer: 3 },
    { question: "What is vishing?", options: ["Phishing via voice calls.", "A secure method of communication.", "An advanced malware.", "None of the above."], answer: 0 },
    { question: "What does 'https' in a URL stand for?", options: ["HyperText Transfer Protocol.", "HyperText Transfer Protocol Secure.", "Secure Transfer Protocol.", "None of the above."], answer: 1 },
    { question: "How do cybercriminals make phishing emails look convincing?", options: ["Using legitimate-looking logos.", "Copying email formats of real companies.", "Using familiar sender names.", "All of the above."], answer: 3 },
    { question: "What is a common phishing subject line?", options: ["Your account has been locked.", "Win a free prize!", "Urgent: Verify your account.", "All of the above."], answer: 3 },
    { question: "What is clone phishing?", options: ["Creating a fake version of a legitimate email.", "An attack using cloned user accounts.", "A phishing attack on social media.", "None of the above."], answer: 0 },
    { question: "What is smishing?", options: ["Phishing via SMS or text messages.", "A type of ransomware.", "Phishing on social media.", "None of the above."], answer: 0 },
    { question: "How can you verify the sender of an email?", options: ["By checking the domain in the email address.", "By responding to the email.", "By clicking links to verify authenticity.", "None of the above."], answer: 0 },
    { question: "Why should you avoid sharing sensitive information over email?", options: ["Emails are secure by default.", "Emails can be intercepted or faked.", "It's faster to share over phone.", "None of the above."], answer: 1 },
    { question: "What should you do if you fall for a phishing scam?", options: ["Report it to IT support immediately.", "Ignore it as it cannot be reversed.", "Delete the phishing email.", "None of the above."], answer: 0 },
    { question: "How can you identify a fake website?", options: ["Check the URL for misspellings.", "Verify the website's SSL certificate.", "Look for unusual design features.", "All of the above."], answer: 3 },
    { question: "Why is it dangerous to click on unknown links?", options: ["It can download malware.", "It can redirect to phishing websites.", "It can reveal your IP address.", "All of the above."], answer: 3 }
];

// Select 10 random questions from the pool
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