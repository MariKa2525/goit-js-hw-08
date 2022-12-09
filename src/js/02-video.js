import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);



const onPlay = function ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))



