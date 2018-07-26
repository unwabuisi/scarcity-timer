$(document).ready(function() {


    var t = 15;

    // this function will initialize a 24 hours period and update the DOM with
    // the right values
    function initialize(time) {

    var days = 0;
    var hours = 24;
    var minutes = 59;
    var seconds = 59;

    $("#s").text(seconds);
    $("#m").text(minutes);
    $("#h").text(hours);
    $("#d").text(days);
    countDown(seconds,minutes,hours,days);
    }


    function countDown(s,minutes,hours,days) {

        // setInterval will run a check every second. When a minute passes (seconds = 0)
        // it will update each unit of time with the correct amount of time remaining

        setInterval(function () {
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
        }, 1000);

    }

initialize();
});
