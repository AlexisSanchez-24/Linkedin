module.exports = function task3() {

// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  let resultado = '';
  
  if (i % 3 === 0) {
      resultado += 'Fizz';
  }
  if (i % 5 === 0) {
    resultado += 'Buzz';
  }

  console.log(resultado || i);
}

}
