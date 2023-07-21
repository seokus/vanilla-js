const greetingForm = document.querySelector("#greetingForm");
const greetingInput = document.querySelector("#greetingInput");
const greetingBtn = document.querySelector("#greetingBtn");
const greetingDisplay = document.querySelector("#greetingDisplay");
const greetingLogout = document.querySelector("#greetingLogout");
const greetingDisplayBox = document.querySelector("#greetingDisplayBox");
const USER__NAME = "username";

greetingForm.addEventListener("submit", greetingSubmit);

function greetingSubmit(event) {
  event.preventDefault();
  const newUser = greetingInput.value;
  greetingInput.value = null;
  greetingForm.style.display = "none";
  paintGreeting(newUser);
  saveUsername(newUser);
  greetingLogout.style.display = "block";
}

function paintGreeting(newUser) {
  greetingDisplayBox.style.display = "block";
  greetingDisplay.innerText = `Hello ${newUser}`;
}

function saveUsername(newUser) {
  localStorage.setItem(USER__NAME, newUser);
}

const getUsername = localStorage.getItem(USER__NAME);
if (getUsername) {
  greetingForm.style.display = "none";
  paintGreeting(getUsername);
}

greetingLogout.addEventListener("click", deleteGreeting);

function deleteGreeting() {
  greetingDisplayBox.style.display = "none";
  localStorage.removeItem(USER__NAME);
  greetingForm.style.display = "block";
}
