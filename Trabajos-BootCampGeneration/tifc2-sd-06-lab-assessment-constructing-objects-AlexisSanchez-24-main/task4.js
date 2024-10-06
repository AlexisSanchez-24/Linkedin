// Type your code below this line!
function Journey(from, to) {
  this.from = from
  this.to = to
}

// Type your code above this line!
function task4() {
const prompt = require("prompt-sync")();
// Type your code below this line!
from = prompt("Ingresa Inicio: ")
to = prompt("Ingresa Fin: ")

// Type your code above this line!

const travel = new Journey(  from, to)

console.log(`Booking a taxi from ${travel.from} to ${travel.to}.`)

}

module.exports = task4;