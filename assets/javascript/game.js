$(document).ready(function() {
    var targetNumber;
    var num = [];
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    init();
    playGame();
    updateStats();

    function playGame() {
        $('#one').on('click', function () {
            userTotal = userTotal + num1;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);
            //sets win/lose conditions
            if (userTotal == targetNumber) {
                updateWins();
            }
            else if (userTotal > targetNumber) {
                udpateLoses();
            }
        })
        $('#two').on('click', function () {
            userTotal = userTotal + num2;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);
            if (userTotal == targetNumber) {
                updateWins();
            }
            else if (userTotal > targetNumber) {
                udpateLoses();
            }
        })
        $('#three').on('click', function () {
            userTotal = userTotal + num3;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);
            //sets win/lose conditions
            if (userTotal == targetNumber) {
                updateWins();
            }
            else if (userTotal > targetNumber) {
                udpateLoses();
            }
        })
        $('#four').on('click', function () {
            userTotal = userTotal + num4;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);

            if (userTotal == targetNumber) {
                updateWins();
            }
            else if (userTotal > targetNumber) {
                udpateLoses();
            }
        });
    }

    function updateStats() {
        $('#randomNumber').text(targetNumber);
        $('#numberWins').text(wins);
        $('#numberLosses').text(losses);
    }

    function generateRandomNumnber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    function init() {
        log("Initialize...");

        targetNumber = generateRandomNumnber(19, 101);
        userTotal = 0;

        log(targetNumber);

        for (i = 1; i < 5; i++) {
            this["num" + i] = generateRandomNumnber(1, 12);
            console.log(this["num" + i]);
        }
        $('#randomNumber').text(targetNumber);
        $('#finalTotal').text(userTotal);


    }

    function updateWins() { 
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        init();
    }

    function udpateLoses() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        init()
    }

    function log(message) {
        console.log(message);
    }

}); 