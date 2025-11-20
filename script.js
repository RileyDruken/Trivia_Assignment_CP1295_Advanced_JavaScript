document.addEventListener("DOMContentLoaded", (evt) => {
  document.querySelectorAll("#answerList li button").forEach(element => {
    element.addEventListener("click", (evt) => {
        console.log("I was clicked")
    })
  });
});