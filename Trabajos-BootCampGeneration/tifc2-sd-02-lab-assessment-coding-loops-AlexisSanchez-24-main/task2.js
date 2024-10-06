module.exports = function task2() {

// Refer to Task 2 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
    let resultado = '';

    if (i % 3 === 0) {
        resultado += 'Fizz';
        console.log(resultado);
    }else{
        console.log(i);
    }
}

}
