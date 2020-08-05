const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const user_ls = "currentUser",
  showing_on = "showing";

function saveName(text) {
  localStorage.setItem(user_ls, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(showing_on);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(showing_on);
  greeting.classList.add(showing_on);
  greeting.innerText = `hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(user_ls);
  console.log(currentUser);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
