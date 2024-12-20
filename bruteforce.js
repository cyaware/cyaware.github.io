document.getElementById("startButton").addEventListener("click", startBruteForce);
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("targetPassword");
    const icon = this;

    // Toggle the input type between "password" and "text"
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.textContent = "🙈"; // Change icon to "eye-off"
    } else {
        passwordInput.type = "password";
        icon.textContent = "👁️"; // Change icon back to "eye"
    }
});

document.getElementById("startButton").addEventListener("click", startBruteForce);


function startBruteForce() {
    const targetPassword = document.getElementById("targetPassword").value;
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous output

    if (!targetPassword) {
        output.innerHTML = "<p style='color: red;'>Please enter a password to simulate the attack.</p>";
        return;
    }

    evaluatePasswordComplexity(targetPassword);

    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let currentAttempt = "";
    let index = 0;
    const startTime = Date.now();

    function bruteForce() {
        let attempts = 0; // Initialize attempt counter
    
        function tryPassword() {
            attempts++;
            
            // Check if the current attempt matches the target password
            if (currentAttempt === targetPassword) {
                const endTime = Date.now();
                const totalTime = ((endTime - startTime) / 1000).toFixed(2); // Time in seconds
                output.innerHTML += `<p>Password found: <strong>${currentAttempt}</strong></p>`;
                output.innerHTML += `<p>Attempts: ${attempts}</p>`;
                output.innerHTML += `<p>Time taken: ${totalTime} seconds</p>`;
                return;
            }
    
            // Generate the next attempt
            if (currentAttempt.length < targetPassword.length) {
                currentAttempt = currentAttempt.slice(0, -1) + characters[index % characters.length];
                index++;
                if (index % characters.length === 0) currentAttempt += characters[0];
                
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2); // Real-time elapsed time
                output.innerHTML = `
                    <p>Trying: ${currentAttempt}</p>
                    <p>Attempts so far: ${attempts}</p>
                    <p>Elapsed time: ${elapsedTime} seconds</p>
                `;
    
                setTimeout(tryPassword, 10); // Add a slight delay
            }
        }
    
        tryPassword(); // Start the simulation
    }
    

    bruteForce();
}

function evaluatePasswordComplexity(password) {
    const passwordTip = document.getElementById("passwordTip");
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const mediumPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strongPattern.test(password)) {
        passwordTip.innerHTML = "Your password is strong. Well done!";
        passwordTip.style.color = "green";
    } else if (mediumPattern.test(password)) {
        passwordTip.innerHTML = "Your password is medium. Consider adding special characters or making it longer.";
        passwordTip.style.color = "orange";
    } else {
        passwordTip.innerHTML = "Your password is weak. Use a mix of uppercase, lowercase, numbers, and special characters.";
        passwordTip.style.color = "red";
    }
}
