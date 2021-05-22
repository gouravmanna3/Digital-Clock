const colorElement = document.getElementById('colorContainer');
const timeElement = document.getElementById('timeContainer');
const separatorElement = document.getElementById("separatorId");

function displayClock() {
  getTime();
}

function getTime() {

  getDay();
  document.getElementById('date').textContent = getCurrentDate();

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

function getDay() {
  const date = new Date();
  const day = date.getDay();

  document.getElementById(day).classList.add("currentday");
}

let toggle = true;
setInterval(function() {
  toggle ? separatorElement.classList.add('blink') : separatorElement.classList.remove('blink');
  toggle = !toggle;
},1000);

function getCurrentDate() {
  let today = new Date();
  let month = today.toLocaleString( 'default', { month: 'long' });
  let year = today.getFullYear().toString();
  let day = nth(today.getDate());

  return month + ' ' + day + ' ' + year;
}

const nth = function(day) {
  return day + (day ? ['th', 'st', 'nd', 'rd'][(day>3 && day<21) || day%10 > 3 ? 0 : day%10] : '');
}

timeElement.style.color = window.getComputedStyle(colorElement.firstElementChild).backgroundColor;
colorElement.firstElementChild.classList.add('selectedColorBorder');

colorElement.addEventListener('click', (event) => {

  if(event.target.id == 'colorContainer') {
    return;
  }

  if(colorElement.querySelector('.selectedColorBorder')) {
    colorElement.querySelector('.selectedColorBorder').classList.remove('selectedColorBorder');
  }
  const selectedColorElement = document.getElementById(event.target.id);
  selectedColorElement.classList.add('selectedColorBorder');
  const compStyles = window.getComputedStyle(selectedColorElement);
  timeElement.style.color = compStyles.backgroundColor;
  timeElement.style.boxShadow =  ` 0px 0px 40px 15px ${compStyles.backgroundColor}`;
})

