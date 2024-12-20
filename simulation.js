const emails = {
    1: {
        content: "Your account has been compromised. Click the link below to secure your account.",
        link: "https://fake-bank.com/secure"
    },
    2: {
        content: "Someone tried to access your social media account. Update your password immediately.",
        link: "https://phish-social.com/reset"
    },
    3: {
        content: "Congratulations! You’ve won a $500 gift card. Claim it now!",
        link: "https://scam-store.com/claim"
    }
};

function openEmail(id) {
    const emailContentDiv = document.getElementById("email-content");
    const contentText = document.getElementById("content-text");
    const visitLink = document.getElementById("visit-link");

    emailContentDiv.classList.remove("hidden");
    contentText.textContent = emails[id].content;
    visitLink.classList.remove("hidden");
    visitLink.dataset.link = emails[id].link;
}

function visitPhishingLink() {
    const link = event.target.dataset.link;
    const simulation = confirm("This is a phishing link. Are you sure you want to proceed?");
    if (simulation) {
        window.open(link, "_blank");
    } else {
        alert("Good job! Always verify links before clicking.");
    }
}
