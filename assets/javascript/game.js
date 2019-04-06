$(document).ready(function() {
    var targetNumber;
    var diamond = [];
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    var backgroundMusic = document.createElement("audio");
    backgroundMusic.setAttribute("src", "assets/sounds/bensound-ukulele.mp3")
    //backgroundMusic.play();

    $('.toast').toast('hide');
    // $('.toast').toast('show');

    function playGame() {
        $('#one').on('click', function () {
            userTotal = userTotal + diamond1;       
            checkGameStatus();
        })
        $('#two').on('click', function () {
            userTotal = userTotal + diamond2;
            checkGameStatus();
        })
        $('#three').on('click', function () {
            userTotal = userTotal + diamond3;     
            checkGameStatus();
        })
        $('#four').on('click', function () {
            userTotal = userTotal + diamond4;
            checkGameStatus();
        });
    }


    function updateStats() {
        $('#randomNumber').text(targetNumber);
        $('#numberWins').text(wins);
        $('#numberLosses').text(losses);

        $('#randomNumber').text(targetNumber);
        $('#finalTotal').text(userTotal);
    }


    function generateRandomNumnber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }


    function init() {
        console.clear();
        console.log("initialized...");
        userTotal = 0;
        for (i = 1; i < 5; i++) {
            this["diamond" + i] = generateRandomNumnber(1, 12);
            console.log("value of diamond"+i+": " +this["diamond" + i]);
        }
        targetNumber = generateRandomNumnber(19, 101);
        console.log("target number: "+targetNumber);
        
        updateStats();
    }


    function checkGameStatus() {
        console.log("new user total: " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal === targetNumber) {
            alert("You won!");
            //$('.toast').toast('show');
            wins++;
            $('#numberWins').text(wins);
            //toggleMusic();
            //playMusic();
            init();
            
        }
        else if (userTotal > targetNumber) {
            alert("You lost!");
            losses++;
            $('#numberLosses').text(losses);
            init()
        }
    }

    function playMusic() {
        console.log("called toggleMusic");

        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }

    }


    init();
    playGame();
    updateStats();
}); 


