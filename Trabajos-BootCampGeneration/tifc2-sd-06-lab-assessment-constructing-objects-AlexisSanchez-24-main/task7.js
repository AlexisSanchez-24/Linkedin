

// Type your code below this line!
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.detail = function() {
        console.log(`Marca: ${this.brand}`);
        console.log(`Modelo: ${this.model}`);
        console.log(`Año: ${this.year}`);
    };
}


Car.prototype.updateYear = function(newYear) {
    this.year = newYear;
};

const prompt = require("prompt-sync")();

function createCar() {
    var brand = prompt("Ingrese la marca del coche:");
    var model = prompt("Ingrese el modelo del coche:");
    var year = parseInt(prompt("Ingrese el año del coche:"), 10);

    if (isNaN(year) || year <= 1885) { 
        console.log("Por favor, ingresa un año válido.");
        return;
    }

    var car = new Car(brand, model, year);

    car.detail();
    
    var updateYear = prompt("¿Deseas actualizar el año del coche? (si/no):");
    if (updateYear.toLowerCase() === 'si') {
        var newYear = parseInt(prompt("Ingresa el nuevo año del coche:"), 10);
        if (!isNaN(newYear) && newYear > 1885) {
            car.updateYear(newYear);
            console.log("Detalles actualizados:");
            car.displayDetails();
        } else {
            console.log("Año no válido para actualizar.");
        }
    }
}

createCar();

// Type your code above this line!

