// Set the date we're counting down to
var countDownDate = new Date("Oct 02, 2017 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  days = String(days).length >= 2 ? days : "0" + days;
  hours = String(hours).length >= 2 ? hours : "0" + hours;
  minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
  seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
  // Display the result in the element with id="demo"
  document.getElementById("pre-ico-start").innerHTML = days + "<span class=\"dots\">:</span>" + hours + "<span class=\"dots\">:</span>"
  + minutes + "<span class=\"dots\">:</span>" + seconds;
document.getElementById("pre-ico-start-2").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("pre-ico-start").innerHTML = "EXPIRED";
    document.getElementById("pre-ico-start-2").innerHTML = "EXPIRED";
  }
}, 1000);