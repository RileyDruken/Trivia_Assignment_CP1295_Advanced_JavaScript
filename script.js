import { question } from "./questions_lib.js";

document.addEventListener("DOMContentLoaded", (evt) => {
  let questions = []
  let exampleQuestion = question;
  console.log(exampleQuestion)

  document.querySelectorAll("#answerList li button").forEach(element => {
    element.addEventListener("click", (evt) => {
        console.log("I was clicked")
    })
  });
});