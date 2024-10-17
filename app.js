// Handle Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate a simple login validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "password") {
        document.getElementById('loginScreen').style.display = "none";
        document.getElementById('gameScreen').style.display = "flex";
    } else {
        alert("Invalid login credentials. Try 'user' and 'password'.");
    }
});

// Handle Phishing Simulation
function checkPhishing() {
    const phishingLink = document.getElementById('phishingLink');
    const feedback = document.getElementById('feedback');

    if (phishingLink.href === "#") {
        feedback.innerHTML = "Good job! You avoided clicking on a phishing link.";
        feedback.className = "success";
    } else {
        feedback.innerHTML = "Oops! That link was suspicious. Be cautious!";
        feedback.className = "error";
    }
}
