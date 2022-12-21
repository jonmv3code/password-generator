"use strict";
const generate = document.querySelector(".btn-generate");
const passwordHtml = document.querySelector(".password");
const lengthInput = document.querySelector(".length");

generate.addEventListener("click", (e) => {
  e.preventDefault();
  passwordHtml.innerHTML = passwordGenerator();
});

function passwordGenerator() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const length = lengthInput.value;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomNumber);
  }
  return password;
}
