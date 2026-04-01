const input = document.getElementById("inputText");
const button = document.getElementById("addBtn");
const container = document.getElementById("container");
const reset = document.getElementById("resetBtn");
const minus = document.getElementById("minusBtn");

button.addEventListener("click", () => {
  const text = input.value;

  if (text === "") {
    return;
  }

  const newElement = document.createElement("p");
  newElement.textContent = text;

  newElement.addEventListener("click", () => {
    //クリックしたら線を付ける、もう一回押したら線を消す

    if (newElement.style.textDecoration === "line-through") {
      newElement.style.textDecoration = "none";
    } else {
      newElement.style.textDecoration = "line-through";
    }
  });

  container.appendChild(newElement);

  input.value = "";
});

reset.addEventListener("click", () => {
  container.innerHTML = "";
});

minus.addEventListener("click", () => {
  const last = container.lastElementChild;
  if (last) container.removeChild(last);
});
