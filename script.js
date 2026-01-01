// Future use (filter / popup / animation)
console.log("Video Gallery Loaded");
function openVideo(videoSrc) {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");

  video.src = videoSrc;
  popup.style.display = "flex";
}

function closeVideo() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");

  video.pause();
  video.src = "";
  popup.style.display = "none";
}
