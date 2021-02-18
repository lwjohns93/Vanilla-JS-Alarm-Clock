//Display current time
const currentTime = setInterval (function() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
 
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds;

  document.getElementById('clock-display').innerText = time;
  document.getElementById('clock-display').innerContent = time;
}, 1000);

//Create functions that populate the dropdown menus
//Populate hours menu
function hoursMenu () {
  const select = document.getElementById('alarm-hours');
  let hours = 24;
  for (i=0; i<=hours; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i)
  }
}
hoursMenu()
//Populate minutes dropdown menu
function minutesMenu () {
  const select = document.getElementById('alarm-minutes');
  let minutes = 59;
  for (i=0; i <=minutes; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
minutesMenu();



//Create button that creates alarm time from dropdown menu selection and compares to the current time. When it aligns, fire off an alert 
const setButton = document.getElementById('set-btn');
setButton.addEventListener('click', setAlarm)
function setAlarm() {
  //Create selectors for dropdown menu 
  let hrs = document.getElementById('alarm-hours');
  let mins = document.getElementById('alarm-minutes');
  //Get value of each dropdown menu
  let selectedHours = hrs.options[hrs.selectedIndex].value;
  let selectedMinutes = mins.options[mins.selectedIndex].value;
  //Create alarmtime variable from dropdown menu values 
  let alarmTime = selectedHours + ":" + selectedMinutes;
  //On click disable selections
  document.getElementById('alarm-hours').disabled = true;
  document.getElementById('alarm-minutes').disabled = true;
  console.log(alarmTime)

  //Create setInterval function that creates time
    setInterval(function(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    //Create current time variable
    let currentTime = currentHours + ":" + currentMinutes;
    //Compare alarm time to current time, if they are equal fire off an alert
    if (alarmTime == currentTime) {
        const modal = document.getElementById("alarm-modal");
        modal.style.display = "block";
    }
  }, 1000)
} 
setAlarm();


//Create reset alarm button
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetAlarm);
function resetAlarm () {
  document.getElementById('alarm-hours').disabled = false;
  document.getElementById('alarm-minutes').disabled = false;
  document.getElementById('alarm-hours').value = 0;
  document.getElementById('alarm-minutes').value = 0;
}
resetAlarm ();

//Create stop alarm button on modal
const stopBtn = document.getElementById("stop-btn");
stopBtn.addEventListener('click', stopAlarm);
function stopAlarm() {
  const modal = document.getElementById("alarm-modal");
  modal.style.display = "none";

  document.getElementById('alarm-hours').disabled = false;
  document.getElementById('alarm-minutes').disabled = false;
  document.getElementById('alarm-hours').value = 0;
  document.getElementById('alarm-minutes').value = 0;
}
stopAlarm();
