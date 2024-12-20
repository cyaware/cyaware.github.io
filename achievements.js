const achievements = [
    
        { 
            module: "Phishing Module", 
            badge: "Phishing Detective", 
            score: 85, 
            image: "images/phishing_detective.png" 
        },

        { 
            module: "Password Module", 
            badge: "Password Master", 
            score: 95, 
            image: "images/phishing_detective.png" 
        },
        // Add more modules dynamically here if needed
];

const achievementList = document.getElementById('achievement-list');

achievements.forEach(({ module, badge, score }) => {
    const achievementItem = document.createElement('div');
    achievementItem.classList.add('achievement-item');
    achievementItem.innerHTML = `
        <h3>${badge}</h3>
        <p>Module: ${module}</p>
        <p>Score: ${score}</p>
        <img src="path_to_badge_images/${badge.replace(' ', '_').toLowerCase()}.png" alt="${badge} badge">
    `;
    achievementList.appendChild(achievementItem);
});
