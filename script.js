//your JS code here. If required.
function updateTimer() {
    const timer = document.getElementById("timer");

    const now = new Date();

    timer.innerText = now.toLocaleString();
}

updateTimer();

setInterval(updateTimer, 1000);