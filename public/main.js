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

/*-- Start Pace --*/
Pace.on('done', function(){
    $('#bg').fadeIn();
});
/*-- End Pace --*/

/*-- Start Contents --*/
function downClick () {
    document.getElementById('contents').style.display = "block";
};
/*-- End Contents --*/

/*-- Start Audio --*/
$(function () {
    var audioBtn = $('.audio_button'),
        audioWrap = $('.audio_wrap'),
        audio = document.getElementById('audio'),
        bg = document.getElementById('bg'),
        home = document.getElementById('home'),
        about = document.getElementById('about'),
        skills = document.getElementById('skills'),
        policy = document.getElementById('policy'),
        price = document.getElementById('price'),
        contact = document.getElementById('contact');

    function playAudio () {
        audio.play();
        audioWrap.addClass('play');
        bg.className = "animation";
        home.className = "animation";
        about.className = "animation";
        skills.className = "animation";
        policy.className = "animation";
        price.className = "animation";
        contact.className = "animation";
    };

    function pauseAudio () {
        audio.pause();
        audioWrap.removeClass('play');
        bg.className = "";
        home.className = "";
        about.className = "";
        skills.className = "";
        policy.className = "";
        price.className = "";
        contact.className = "";
    };

    audioBtn.on('click', function () {
        if( audioWrap.hasClass('play') ) {
            pauseAudio()
        } else {
            playAudio();
        }
    });

    var playBtn = $('.play_button');
    playBtn.on('click', function () {
        playAudio();
    });

    var pauseBtn = $('.pause_button');
    pauseBtn.on('click', function () {
        pauseAudio();
    });

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState == 'hidden') {
            audio.pause();
        } else if (document.visibilityState === 'visible') {
            if( audioWrap.hasClass('play') ) {
                audio.play();
            }
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
