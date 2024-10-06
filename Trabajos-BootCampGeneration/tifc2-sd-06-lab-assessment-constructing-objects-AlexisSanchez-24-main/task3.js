// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function() {
      console.log(this.subject + ": " + this.message);
        }
   
    
    // Type your code above this line!
}
  function task3() {

    const prompt = require("prompt-sync")();
// Type your code below this line!
    const asunto = prompt("Ingrese el asunto: ");
    const mensaje = prompt("Ingrese el mensaje: ");

    const newMail = new Mail(asunto, mensaje);
    
 // Type your code above this line!
  
  newMail.printMail()
  
  }


  module.exports = task3;