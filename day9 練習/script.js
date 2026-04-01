const button = document.getElementById("addBtn");
const reset = document.getElementById("resetBtn");
const minus = document.getElementById("minus");
const container = document.getElementById("container");

let count = 0;

button.addEventListener("click", () => {
  count++;
  const newElement = document.createElement("p");
  newElement.textContent = "ハイキュー" + count;
  container.appendChild(newElement);
});

reset.addEventListener("click", () => {
  count = 0;
  container.innerHTML = "";
});

minus.addEventListener("click", () => {
  count--;
  const lastItem = container.lastElementChild;
  if (lastItem) {
    container.removeChild(lastItem);
  }
});
