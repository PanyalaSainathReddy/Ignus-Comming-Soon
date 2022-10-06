//DOM load event
window.addEventListener("load", () => {
  var body = document.getElementsByTagName("BODY")[0];
  var video_background = document.getElementById("video_background");
  var video_loading = document.getElementById("video-loading");
  var enter_video_div = document.getElementById("enter_video_div");
  var bg_image = document.getElementById("bg_image");
  const spotlight = document.querySelector(".spotlight");
  const audio = new Audio("static/videos/aud.mp4");
  video_background.playbackRate = 7.5;

  enter_video_div.onclick = function () {
    enter_video_div.style.display = "none";
    video_loading.style.display = "none";
    video_background.style.display = "block";
    video_background.play();
    audio.play();
  };

  video_background.addEventListener(
    "ended",
    function () {
      video_background.style.display = "none";
      spotlight.style.display = "block";
      body.style.cursor = "none";
      bg_image.style.display = "block";
    },
    false
  );

  let spotlightSize = "transparent 20%, rgba(0, 0, 0, 0.9) 30%";

  window.addEventListener("mousemove", (e) => updateSpotlight(e));
  window.addEventListener("mousedown", (e) => {
    spotlightSize = "transparent 10%, rgba(0, 0, 0, 0) 25%";
    updateSpotlight(e);
  });

  window.addEventListener("mouseup", (e) => {
    spotlightSize = "transparent 20%, rgba(0, 0, 0, 0.9) 30%";
    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${
      (e.pageX / window.innerWidth) * 100
    }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
  }
});
