window.onload = function() {

    var currentMinute = 0;
    var currentSecond = 0;
    var settedSeconds = 30;
    var settedMinutes = 1;
    var imputSeconds = document.getElementById("seconds")
    var imputMinutes = document.getElementById("minutes")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var minutesDisplay = document.getElementById("minutes-display");
    var secondsDisplay = document.getElementById("seconds-display");
    var Interval;

    var notificationSoundPath = "./session.mp3";


    initliaizeDisplayValues();

    buttonStart.onclick = function() {
        startTimer();

    }

    buttonStop.onclick = function() {
        stopTimer(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        currentSecond = settedSeconds;
        currentMinute = settedMinutes;
        updateDisplayNumbers();
    }


    imputSeconds.oninput = function() {
        settedSeconds = currentSecond = imputSeconds.value;
        updateDisplayNumbers();
    }

    imputMinutes.oninput = function() {
        settedMinutes = currentMinute = imputMinutes.value;
        updateDisplayNumbers();
    }

    function startTimer() {
        settedSeconds = currentSecond = imputSeconds.value;
        settedMinutes = currentMinute = imputMinutes.value;
        clearInterval(Interval);
        Interval = setInterval(loopTimer, 1000);
    }

    function loopTimer() {

        decrementTime();

        if (timeEnded()) {
            stopTimer(Interval);
            playSound(notificationSoundPath);
        }


        var timerDisplay = document.getElementsByClassName("timer-display")[0];
        if (timeCloseToEnd()) {
            timerDisplay.style.backgroundColor = "red";
        } else {
            timerDisplay.style.backgroundColor = "white";
        }

        updateDisplayNumbers();

        function timeEnded() {
            return currentMinute <= 0 && currentSecond <= 0;
        }

        function timeCloseToEnd() {
            return currentMinute <= 0 && currentSecond <= 5;
        }
    }


    function decrementTime() {
        if (currentSecond <= 0) {
            currentMinute--;
            currentSecond = 60;
        }
        currentSecond--;
    }

    function updateDisplayNumbers() {
        if (currentSecond <= 9)
            secondsDisplay.innerHTML = "0" + currentSecond;

        else
            secondsDisplay.innerHTML = currentSecond;


        if (currentMinute <= 9)
            minutesDisplay.innerHTML = "0" + currentMinute;

        else
            minutesDisplay.innerHTML = currentMinute;

        updateSliders();

    }

    function updateSliders() {
        imputSeconds.value = currentSecond;
        imputMinutes.value = currentMinute;
    }

    function initliaizeDisplayValues() {
        currentSecond = imputSeconds.value;
        currentMinute = imputMinutes.value;
        updateDisplayNumbers();
    }

    function stopTimer(Interval) {
        clearInterval(Interval);
        currentSecond = imputSeconds.value;
        currentMinute = imputMinutes.value;
    }

    function playSound(url) {
        const audio = new Audio(url);
        audio.play();
    }
}