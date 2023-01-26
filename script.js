const time_element = document.querySelector('.watch .time');
const start_button = document.getElementById('start');
const stop_button = document.getElementById('stop');
const reset_button = document.getElementById('reset');

let secounds = 0;
let interval = null;

// event listeners
start_button.addEventListener('click', start);
stop_button.addEventListener('click', stop);
reset_button.addEventListener('click', reset);

// update time
function updateTime() {
    secounds++;
    let hours = Math.floor(secounds / 3600);
    let mins = Math.floor((secounds - hours * 3600) / 60);
    let secs = secounds % 60;

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hours < 10) hours = '0' + hours;

    time_element.innerHTML = `${hours}:${mins}:${secs}`;
}
//start
function start() {
    if(interval) return
    interval = setInterval(updateTime, 1000);
}
// stop
function stop() {
    clearInterval(interval);
    interval = null;
}
// reset
function reset() {
    stop();
    secounds = 0;
    time_element.innerHTML = '00:00:00';
}

