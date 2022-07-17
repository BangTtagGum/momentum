const clock = document.querySelector(".clock h2");
const span = document.querySelector(".clock span");
function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  span.innerText = `${String(seconds).padStart(2, "0")}`;
}
getClock();
setInterval(getClock, 1000);
