$(document).ready(function() {
    var targetNumber;
    var num = [];
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
            userTotal = userTotal + num1;       
            checkGameStatus();
        })
        $('#two').on('click', function () {
            userTotal = userTotal + num2;
            checkGameStatus();
        })
        $('#three').on('click', function () {
            userTotal = userTotal + num3;     
            checkGameStatus();
        })
        $('#four').on('click', function () {
            userTotal = userTotal + num4;
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
        log("Initialize...");
        console.clear();

        targetNumber = generateRandomNumnber(19, 101);
        userTotal = 0;

        log(targetNumber);

        for (i = 1; i < 5; i++) {
            this["num" + i] = generateRandomNumnber(1, 12);
            console.log(this["num" + i]);
        }
        
        updateStats();
    }


    // function updateWins() { 
    //     alert("You won!");
    //     wins++;
    //     $('#numberWins').text(wins);
    //     init();
    // }


    // function udpateLoses() {
    //     alert("You lose!");
    //     losses++;
    //     $('#numberLosses').text(losses);
    //     init()
    // }


    function log(message) {
        console.log(message);
    }


    function checkGameStatus() {
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == targetNumber) {
            //updateWins();
            alert("You won!");
            //$('.toast').toast('show');
            wins++;
            $('#numberWins').text(wins);
            toggleMusic();
            init();
            
        }
        else if (userTotal > targetNumber) {
            //udpateLoses();
            alert("You lose!");
            losses++;
            $('#numberLosses').text(losses);
            init()
        }
    }

    function toggleMusic() {
        console.log("called toggleMusic");

        if (backgroundMusic.playing()) {
            // $('#music-toggle>a>i').removeClass("fa-volume-up").addClass("fa-volume-off");
            // $('#music-toggle>a').text('Off');
            // Stop Music
            backgroundMusic.stop();
        } else {
            // $('#music-toggle>a>i').removeClass("fa-volume-off").addClass("fa-volume-up");
            // $('#music-toggle>a').text('On');
            // Start music
            backgroundMusic.play();
        }

    }





    init();
    playGame();
    updateStats();
}); 


