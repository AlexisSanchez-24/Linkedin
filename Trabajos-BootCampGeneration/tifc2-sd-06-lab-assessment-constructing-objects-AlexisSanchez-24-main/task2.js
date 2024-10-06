function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }

  function task2() {
   const prompt = require("prompt-sync")();
  // Type your code below this line!

  asunto = prompt("ingrese asunto: ")
  mensaje = prompt("ingrese mensaje: ")
   
  const newMail = new Mail( asunto,mensaje  )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)

  }

  module.exports = task2;