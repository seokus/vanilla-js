const clockNum = document.querySelector("#clockNum");

function timeStart() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);
  clockNum.innerText = `${hours}:${minutes}:${seconds}`;
}

timeStart();

setInterval(timeStart, 1000);
