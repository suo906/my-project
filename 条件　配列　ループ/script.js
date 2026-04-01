const box = document.getElementById("colorBox");

box.addEventListener("click", () => {
  const colors = ["red", "blue","green","yellow", "pink"];
  const randomColor = colors[Math.floor()Math.random() * colors.length];
  box.styke.backgroundColor = randomColor;
});