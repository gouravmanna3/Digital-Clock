function displayTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let session = 'AM'

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

 document.getElementById("hours").textContent = hours;
 document.getElementById("minutes").textContent = minutes;
 document.getElementById("seconds").textContent = seconds; 
 document.getElementById("ampm").textContent = session;

  setTimeout(function(){
      displayTime();
  }, 1000);
}

function convertTime(x) {
  if(x < 10)
      return "0"+x;
  return x;
}

var toggle = true;
separatorElement = document.getElementById("separatorId");

setInterval(function(){
  toggle ? separatorElement.classList.add('blink') : separatorElement.classList.remove('blink');
  toggle = !toggle;
},1000);