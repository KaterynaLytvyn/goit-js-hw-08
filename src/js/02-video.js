import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

console.log(iframe);

iframePlayer.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log('timeupdate', data.seconds);
}, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time")

if (savedTime){
    iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

