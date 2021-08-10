function hour() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var clock = document.getElementById("clock");
  clock.value =
    hour + ":" + minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  setTimeout("hour()", 1000);
}

hour();
