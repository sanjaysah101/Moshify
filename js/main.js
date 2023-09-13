const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("collapsible--expanded");
  });
});
