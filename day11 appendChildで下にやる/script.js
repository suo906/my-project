const button = document.getElementById("addBtn");
const container = document.getElementById("container");
const input = document.getElementById("inputText");

button.addEventListener("click", () => {
  addTodo();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const text = input.value;

  const newElement = document.createElement("p");
  newElement.textContent = text;

  container.appendChild(newElement);

  input.value = "";
}
