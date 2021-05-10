function displayClock() {
  document.getElementById('date').textContent = getDate();
  getTime();
}

function getTime() {
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
 document.getElementById("ampm").textContent = session;

  setTimeout(function(){
    getTime();
  }, 1000);
}

function convertTime(x) {
  if(x < 10)
      return "0"+x;
  return x;
}

var toggle = true;
separatorElement = document.getElementById("separatorId");

setInterval(function() {
  toggle ? separatorElement.classList.add('blink') : separatorElement.classList.remove('blink');
  toggle = !toggle;
},1000);

function getDate () {
  let today = new Date();
  let month = today.toLocaleString( 'default', { month: 'long' });
  let year = today.getFullYear();
  let day = nth(today.getDate());

  return month + ' ' + day + ' ' + year;
}

const nth = function (day) {
  return day + (day ? ['th', 'st', 'nd', 'rd'][(day>3 && day<21) || day%10 > 3 ? 0 : day%10] : '');
}

