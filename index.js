const title = document.querySelector("#title");

const clicked_class = "clicked";

function b() {
  const currentClass = title.className;
  if (currentClass !== clicked_class) {
    title.classList.add(clicked_class);
  } else {
    title.classList.remove(clicked_class);
  }
}

function init() {
  title.addEventListener("click", b);
}

init();
