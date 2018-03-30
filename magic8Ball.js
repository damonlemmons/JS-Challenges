var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do", "then do the opposite", "Your answer here"]

function eightBall() {
  question = prompt("What would you like to know human?")
  while (question !== "stop") {
    alert("The answer to " + question + " is: " + answers[Math.floor(Math.random() * answers.length)])
    question = prompt("What else would you like to know?")
  }
  }




eightBall()
