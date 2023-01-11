const buttonElement = document.querySelector(".btn");
const closeButtonElement = document.querySelector(".close-icon");
const trailerContainerElement = document.querySelector(".trailer-container");
const videoElement = document.querySelector("video");

buttonElement.addEventListener("click", () => {
    trailerContainerElement.classList.remove("active");
});

closeButtonElement.addEventListener("click", () => {
    trailerContainerElement.classList.add("active");
    videoElement.pause();
    /* videoElement.pause(); will pause the playing 
    video */
    videoElement.currentTime = 0;
    /* videoElement.currentTime = 0; will set the timer 
    of video to initial i.e. 0s */
});