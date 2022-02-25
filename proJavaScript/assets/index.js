const video = document.querySelector("video")
const button = document.querySelector("button")

function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};
        
MediaPlayer.prototype.play = function() {
    this.media.play();
}
        
const player = new MediaPlayer({el: video});

button.onclick = () => {
player.media.paused ? player.play() : player.pause();
};

function prinNumber () {
        for (var i =0; i < 10; i++){
            function iteracionNumber (n){
                setTimeout (function() {
                    console.log(n);
                },300);
        }
        iteracionNumber(i);
    }
    
}

prinNumber();

(function(){
let color = 'red';
function printColor (){
    console.log(color);
}

printColor();
})();