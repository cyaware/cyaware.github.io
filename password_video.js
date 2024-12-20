const videos = [
    { 
        url: 'https://www.youtube.com/embed/YitHISP0Isk', 
        title: 'Password Security Video 1' 
    },
    { 
        url: 'https://www.youtube.com/embed/xUp5S0nBnfc', 
        title: 'Password Security Video 2' 
    },
    { 
        url: 'https://www.youtube.com/embed/XXrbut5xRbE', 
        title: 'Password Security Video 3' 
    },
    
];

let currentVideoIndex = 0;

function loadVideo() {
    const iframe = document.querySelector('#videoIframe');
    const videoTitle = document.querySelector('#videoTitle');
    
    iframe.src = videos[currentVideoIndex].url;  // Set iframe src to the video URL
    videoTitle.textContent = videos[currentVideoIndex].title;  // Set h1 to the current video's title
}

function navigateVideo(direction) {
    currentVideoIndex += direction;
    
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;  // Go to the last video
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;  // Go to the first video
    }
    
    loadVideo();  // Reload the video and title
}

window.onload = loadVideo;  // Load the first video and title on page load

function toggleMenu() {
    const menu = document.getElementById("sidebar");
    
    // Toggle the 'display' style between 'none' and 'block'
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
