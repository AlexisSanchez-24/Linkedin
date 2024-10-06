//inspecciona el código de este script y completa lo que haga falta para hacer funcionar el contador

document.addEventListener("DOMContentLoaded", function() {
    const counterLbl = document.getElementById('counterLbl');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    let count = 0; 

    incrementBtn.addEventListener('click', function() {
      count++;
      counterLbl.textContent = count; 
    });
    decrementBtn.addEventListener('click', function() {
        count--; 
        counterLbl.textContent = count;
    });

    resetBtn.addEventListener('click', function() {
        count = 0; // Reiniciamos el valor del contador a 0
        counterLbl.textContent = count; // Actualizamos el valor del label
    });
    
  });

