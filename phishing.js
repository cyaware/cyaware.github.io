// Initial score variable
let score = 0;

// Function to open email and show options
function openEmail(type) {
    const emailContent = document.getElementById('email-content');
    const feedback = document.getElementById('feedback');
    emailContent.style.display = 'block';
    feedback.style.display = 'none';

    if (type === 'deceptive-phishing') {
        emailContent.innerHTML = `
            <h2>Verify Your Account</h2>
            <p>Dear user, we have noticed suspicious activity in your account.</p>
            <p><strong>What would you like to do?</strong></p>
            <button onclick="handleAction('click-link', 'deceptive-phishing')">Click Link</button>
            <button onclick="handleAction('report-spam', 'deceptive-phishing')">Report as Spam</button>
            <button onclick="handleAction('ignore', 'deceptive-phishing')">Ignore</button>
        `;
    }
}

// Function to handle user action with dynamic feedback and scoring
function handleAction(action, type) {
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';

    if (type === 'deceptive-phishing') {
        if (action === 'click-link') {
            feedback.innerHTML = `<p><strong>Oh no!</strong> This was a phishing link designed to steal your credentials. Never click unknown links.</p>`;
            feedback.style.backgroundColor = 'red';
            score -= 1;
        } else if (action === 'report-spam') {
            feedback.innerHTML = `<p><strong>Good job!</strong> Reporting suspicious emails as spam helps protect you and others.</p>`;
            feedback.style.backgroundColor = 'green';
            score += 2;
        } else if (action === 'ignore') {
            feedback.innerHTML = `<p><strong>Almost right!</strong> Ignoring is safe, but reporting it as spam is even better.</p>`;
            feedback.style.backgroundColor = 'yellow';
            score += 1;
        }
    }

    // Update score display
    document.getElementById('score').textContent = `Awareness Level: ${score}`;
}
