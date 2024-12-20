const videos = [
    { 
        url: 'https://www.youtube.com/embed/XBkzBrXlle0?si=1ZRUv0H98zelknR1', 
        title: 'Phishing Awareness Video 1' 
    },  // Video 1
    { 
        url: 'https://www.youtube.com/embed/gWGhUdHItto?si=ei-UyyJK-ZPPbRWS', 
        title: 'Phishing Awareness Video 2' 
    },  // Video 2
    { 
        url: 'https://www.youtube.com/embed/gSQgbCo6PAg?si=EmyB6MO_oONeim8N', 
        title: 'Phishing Awareness Video 3' 
    },  
     // Video 3
     { 
        url: 'https://www.youtube.com/embed/lonTsrGAN9E', 
        title: 'Phishing Awareness Video 4' 
    }
    
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