
function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }

function task1() {
  
  // Type your code below this line!

  const newMail = new Mail( "hello","world")
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)

}

  module.exports = task1;