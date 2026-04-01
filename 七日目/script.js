const button = document.getElementById("btn");
const title = document.getElementById("title");

let isRed = false;

button.addEventListener("click", () => {
  button.textContent = "変更した";

  if (!isRed) {
    title.style.color = "red";
    title.textContent = "完了";
    isRed = true;
  } else {
    title.style.color = "blue";
    title.textContent = "粉砕骨折";
    isRed = false;
  }
});
