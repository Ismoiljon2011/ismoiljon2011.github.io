let second = document.querySelector(".second-hand");
let minute = document.querySelector(".minute-hand");
let hour = document.querySelector(".hour-hand");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;

  second.style.transform = `rotate(${secondDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;

  requestAnimationFrame(updateClock);
}

updateClock();
