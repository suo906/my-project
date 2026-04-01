let count = 0;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const display = document.getElementById("count");
const reset = document.getElementById("reset");

plus.addEventListener("click", () => {
  count++;
  display.textContent = count;
  if (count >= 5) {
    display.style.color = "red";
  } else {
    display.style.color = "green";
  }
});

minus.addEventListener("click", () => {
  count--;
  display.textContent = count;
});

reset.addEventListener("click", () => {
  display.textContent = 0;
});
