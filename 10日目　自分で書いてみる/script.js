const button = document.getElementById("addBtn");
const input = document.getElementById("inputText");
const container = document.getElementById("container");

function addTodo() {
  const text = input.value;
  if (text === "") return;
  const newElement = document.createElement("p");
  newElement.textContent = text;

  newElement.addEventListener;
  ("click",
    () => {
      if (newElement.style.textDecoration === "line-through") {
        nuwElement.style.textDecoration = "";
      } else {
        newElement.style.textDecoration = "line-through";
      }

      //線がついてたら下に移動
      if (newElement.style.textDecoration === "line-through") {
        container.appendChild(newElement);
      }
    });
  container.appendChild(newElement);

  input.value = "";
}

button.addEventListener("click", () => {
  addTodo();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
