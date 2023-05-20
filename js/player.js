let player;
let windowHeight = $(window).width();
const player__elem = $(".player__elem");

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '400',
    width: '670',
    videoId: 'q2a-wN6kKl4',
    events: {
      //   'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
    },
    playerVars: {
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    }
  });
}

if (windowHeight <= 747) {

  player__elem.css("width", "480px");
  player__elem.css("height", "350px");

}

if (windowHeight <= 480) {
  player__elem.css("width", "320px");
  player__elem.css("height", "200px");
}