// Array of video sources (replace with your actual video paths)
const videos = [
    "video/car.mp4",   // Video 1
    "video/plane.mp4", // Video 2
    "video/plane2.mp4"   // Video 3 (add more if needed)
];

// Get the video element
const videoPlayer = document.getElementById("adVideo");

// Keep track of the current video index
let currentVideoIndex = 0;

// Function to change video when the current video ends
function changeVideo() {
    // Move to the next video (or loop back to the first)
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];  // Update video source
    videoPlayer.play();                           // Play the next video
}

// Event listener for when the video ends
videoPlayer.addEventListener("ended", changeVideo);
