import { question } from "./questions_lib.js";

document.addEventListener("DOMContentLoaded", (evt) => {
  let questions = []
  questions.push(new question("In Fallout: New Vegas, what is the name of the town where the Courier begins their journey after being dug out of a shallow grave?",["Primm", "Novac", "Goodsprings", "Sloan"],"Goodsprings",1))
  
  questions.forEach(element => {
    console.log(element)
  });

  document.querySelectorAll("#answerList li button").forEach(element => {
    element.addEventListener("click", (evt) => {
        console.log("I was clicked")
    })
  });
});