/*-- Start Hello World --*/
console.log('%cHELLO WORLD', 'color: pink; font-size: 800%;')
console.log('%cwelcome to console', 'color: pink; font-size: 500%;')
console.log('%ccreated by hirotatsu', 'color: pink;')
/*-- End Hello World --*/

/*-- Start SmoothScroll --*/
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000,
    updateURL: false,
	speedAsDuration: true
});
/*-- End SmoothScroll --*/

/*-- Start Audio --*/
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

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState == 'hidden') {
            audio.pause();
        } else if (document.visibilityState === 'visible') {
            audio.play();
        }
    }, false);
});
/*-- End Audio --*/

/*-- Start Language --*/
document.getElementById("en_detail").style.display = "block";
document.getElementById("ja_detail").style.display = "none";

document.getElementById("en_policy").style.display = "block";
document.getElementById("ja_policy").style.display = "none";

function enClick (target) {
    if (target == "detail") {
        var enDetail = document.getElementById("en_detail");
        var jaDetail = document.getElementById("ja_detail");

        enDetail.style.display = "block";
        jaDetail.style.display = "none";
    } else if (target == "policy") {
        var enPolicy = document.getElementById("en_policy");
        var jaPolicy = document.getElementById("ja_policy");

        enPolicy.style.display = "block";
        jaPolicy.style.display = "none";
    }
};

function jaClick (target) {
    if (target == "detail") {
        var enDetail = document.getElementById("en_detail");
        var jaDetail = document.getElementById("ja_detail");

        enDetail.style.display = "none";
        jaDetail.style.display = "block";
    } else if (target == "policy") {
        var enPolicy = document.getElementById("en_policy");
        var jaPolicy = document.getElementById("ja_policy");

        enPolicy.style.display = "none";
        jaPolicy.style.display = "block";
    }
};
/*-- End Language --*/
