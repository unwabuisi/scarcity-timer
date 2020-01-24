$(document).ready(function() {

    var time = {};
    var timer;
    var zero;

    // this function will update the DOM with the correct number counts for days, hours, minutes, and seconds (s)
    // depending on what the user has entered on the form
    function initialize(time) {

    var days;
    var hours;
    var minutes;
    var seconds;

    if (isNaN(time.days)) {
        days = 0;
    }
    else {
        days = time.days;
    }

    if (isNaN(time.hours)) {
        hours = 0;
    }
    else {
        hours = time.hours;
    }

    if (isNaN(time.minutes)) {
        minutes = 0;
    }
    else {
        minutes = time.minutes;
    }

    if (isNaN(time.seconds)) {
        seconds = 0;
    }
    else {
        seconds = time.seconds;
    }

    $("#s").text(seconds);
    $("#m").text(minutes);
    $("#h").text(hours);
    $("#d").text(days);
    countDown(seconds,minutes,hours,days);
    }

    // This is the function that does the counting down
    function countDown(s,minutes,hours,days) {

        // setInterval will run a check every second. When a minute passes (seconds = 0)
        // it will update each unit of time with the correct amount of time remaining

        timer = setInterval(function () {
            if (s != 0) {
                s--;
                $("#s").text(s);
            }
            if (s === 0 && minutes >= 1) {
                minutes--;
                $("#m").text(minutes);
                s = 59;
                $("#s").text(s);
            }
            if (minutes === 0 && hours >= 1) {
                hours--;
                $("#h").text(hours);
                minutes = 59;
                $("#m").text(minutes);
            }
            if (hours === 0 && days >= 1) {
                days--;
                $("#d").text(days);
                hours = 24;
                $("#h").text(hours);
            }

            // this if statement is for when the counter is completely finished
            if (s === 0 && minutes === 0 && hours === 0 && days === 0) {
                console.log("finished");
            }

        }, 1000);

    }

    function zeroFunction(z) {


    }


    $("#start-timer").on('click', function () {

        for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }


        timer = {
            'seconds':parseInt($('#seconds-input').val()),
            'minutes':parseInt($('#minutes-input').val()),
            'hours':parseInt($('#hours-input').val()),
            'days':parseInt($('#days-input').val())
        };

        zero = {
            "action": $('input[name="zerofunction"]:checked').val(),
            "url": ""
        };
        console.log(zero);

        if (isNaN(timer.seconds) && isNaN(timer.minutes) && isNaN(timer.hours) && isNaN(timer.days)) {
            timer = {
                'seconds':59,
                'minutes':59,
                'hours':24,
                'days':0
            };
            initialize(timer);
        }
        else {

            initialize(timer);
        }
    });

    $("#reset").on('click', function () {
        $("#s").empty();
        $("#m").empty();
        $("#h").empty();
        $("#d").empty();
        $("#seconds-input").val("");
        $("#minutes-input").val("");
        $("#hours-input").val("");
        $("#days-input").val("");
        clearInterval(timer);
    });

    
});
