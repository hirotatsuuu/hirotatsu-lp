// Hello World
console.log('%cHELLO WORLD', 'color: pink; font-size: 800%;')
console.log('%cWELCOME TO CONSOLE', 'color: pink; font-size: 500%;')
console.log('%ccreated by hirotatsu', 'color: pink;')

// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000,
    updateURL: false,
	speedAsDuration: true
});

// audio
document.getElementById('audio').play();
document.getElementById('audio').pause();

$(function () {
    // play and pause
    var audioBtn = $('.audio_button'),
        audioWrap = $('.audio_wrap'),
        audio = document.getElementById('audio');

    audioBtn.on('click', function () {
        if( audioWrap.hasClass('play') ) {
            audio.pause();
            audioWrap.removeClass('play');
        } else {
            audio.play();
            audioWrap.addClass('play');
        }
    });

    // only play
    var playBtn = $('.play_button');
    playBtn.on('click', function () {
        audio.play();
        audioWrap.addClass('play');
    });

    // only pause
    var pauseBtn = $('.pause_button');
    pauseBtn.on('click', function () {
        audio.pause();
        audioWrap.removeClass('play');
    });
});

