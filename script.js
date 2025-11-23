import { question, generateQuestion } from "./questions_lib.js";

document.addEventListener("DOMContentLoaded", (evt) => {

  // I feel there is a better way to do this FIXME:
  let questions = []


  questions.push(new question("In Fallout: New Vegas, what is the name of the town where the Courier begins their journey after being dug out of a shallow grave?", ["Primm", "Novac", "Goodsprings", "Sloan"], "Goodsprings", 1))
  questions.push(new question("In Fallout: New Vegas, what was The Platinum Chip?", ["An Upgrade for Mr.House's Computers/Defense System", "An High Value Casinio Chip uses in the Atomic Wrangler", "An Upgrade for the Power Armour", "An map for the whole wasteland"], "An Upgrade for Mr.House's Computers/Defense System", 1))
  questions.push(new question("Where does Fallout 1 take place?", ["Navada", "Texas", "New Mexico", "Southern California"], "Southern California", 1))
  questions.push(new question("Which Vault is The Lone Wanderer from?", ["Vault 101", "Vault 324", "Value 100", "Value 001"], "Vault 101", 1))
  questions.push(new question("When was Fallout 1 released", ["June 11  30, 1998", "March 23, 2000", "September 30, 1997", "September 05, 1999"], "September 30, 1997", 1))
  questions.push(new question("What Vault is the protagonist Lucy MacLean of the Fallout TV show from?", ["Vault 33", "Vault 302", "Vault 101", "Vault 45"], "Vault 33", 1))
  questions.push(new question("What Year was Fallout 4 released?", ["2000", "1990", "1999", "2015"], "2015", 1))
  questions.push(new question("In Fallout NV which character shoots you during the opening?", ["Benny", "Mr.House", "Easy Pete", "Sunny Smiles"], "Benny", 1))
  questions.push(new question("In Fallout 3, what is the name of the radio station run by Three Dog?", ["Galaxy News Radio", "Enclave Radio", "Silver Shroud FM", "Vault-Tec Broadcast"], "Galaxy News Radio", 1))
  questions.push(new question("In Fallout 4, which faction resides within the underground headquarters known as the Railroad HQ?", ["The Institute", "The Brotherhood of Steel", "The Railroad", "The Minutemen"], "The Railroad", 1))
  questions.push(new question("In Fallout: New Vegas, what is the name of the mutant nightkin leader in Jacobstown?", ["Lily Bowen", "Marcus", "Tabitha", "Dog/God"], "Marcus", 1))
  questions.push(new question("Which Fallout game first introduced the companion Dogmeat?", ["Fallout 1", "Fallout 3", "Fallout 4", "Fallout New Vegas"], "Fallout 1", 1))
  questions.push(new question("In Fallout 2, what organization is responsible for the creation of the GECK?", ["NCR", "Enclave", "Vault-Tec", "Brotherhood of Steel"], "Vault-Tec", 1))
  questions.push(new question("In Fallout 4, what is the name of the giant sea creature encountered near Spectacle Island?", ["Behemoth", "Fog Crawler", "Sharkclaw", "Mirelurk Queen"], "Mirelurk Queen", 1))
  questions.push(new question("In Fallout: New Vegas, which casino is controlled by The Chairmen?", ["The Tops", "Gomorrah", "Ultra-Luxe", "Bison Steve"], "The Tops", 1))

  let gameQuestions = generateQuestion(questions);
  let score = 0;
  let correctQuestion = 0;
  let wrongQuestion = 0;
  let title = document.getElementById("questionTitle")
  let answerList = document.getElementById("answerList")
  let currentQuestion;
  title.textContent = "";
  


  function generateCard() {
    answerList.textContent = "";
    currentQuestion = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];
    gameQuestions = gameQuestions.filter((curQuestion) => curQuestion != currentQuestion);
    title.textContent = currentQuestion.question;
    currentQuestion.options.forEach(element => {
      let questionItem = document.createElement("li")
      let button = document.createElement("button");

      button.setAttribute("Class", "answerButton");
      button.textContent = element;
      button.value = element;

      button.addEventListener("click", (evt) => {
        if (currentQuestion.isAnswer(button.value)) {
          score += currentQuestion.pointValue;
          correctQuestion += 1;
        } else {
          wrongQuestion += 1;
        }
        if (gameQuestions.length > 0) {
          generateCard()
        } else {
          title.textContent = "WELCOME TO ROBCO INDUSTRIES (TM)\nTERMLINK"
          answerList.textContent = "";
          document.getElementById("finalResultSection").className = "";
          document.getElementById("finalScoreCount").textContent = correctQuestion;
          document.getElementById("finalScoreLoss").textContent = wrongQuestion;
        }
        document.getElementById("scoreValue").textContent = score;

      })
      questionItem.appendChild(button)
      answerList.appendChild(questionItem)
    });

  
  }
  generateCard()
  




});