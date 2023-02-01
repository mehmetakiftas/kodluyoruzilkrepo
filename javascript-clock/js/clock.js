// Values 
const myName = document.getElementById('myName');
myName.innerHTML = prompt("Please enter your name");
const myClock = document.getElementById('myClock');
const date = new Date();
const day = date.toLocaleDateString('tr-TR', { weekday: "long" });

// Functions
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}

function setClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hour = checkTime(hours);
    let min = checkTime(minutes);
    let sec = checkTime(seconds);
    myClock.innerHTML = `${hour}:${min}:${sec} - ${day}`;
}


// Loading page and Run the function
window.onload = setClock();
setInterval(setClock, 1000);


