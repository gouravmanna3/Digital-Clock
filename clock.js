function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var session = 'AM'

    if(hours == 0) {
        hours = 12;
    }

    if(hours > 12) {
        hours = hours - 12;
        session = 'PM'
    }

   hours = convertTime(hours);
   minutes = convertTime(minutes);
   seconds = convertTime(seconds);

   const time = hours + ':' + minutes + ':' + seconds + ' ' + session;

   document.getElementById("myClockContainer").innerHTML = time;
   document.getElementById("myClockContainer").textContent = time;

    setTimeout(function(){
        displayTime();
    }, 1000);
}

function convertTime(x) {
    if(x < 10)
        return "0"+x;
    return x;
}