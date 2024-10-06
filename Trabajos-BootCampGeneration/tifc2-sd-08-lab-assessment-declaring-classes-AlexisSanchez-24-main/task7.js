class Player {
  constructor(nombre, vida, fuerza, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.fuerza = fuerza;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.inventario = new Inventario();
  }
  info() {
    return `Nombre: ${this.nombre}, Vida: ${this.vida}, Fuerza: ${this.fuerza}, Defensa: ${this.defensa}, Velocidad: ${this.velocidad}`;
  }
}

class Item {
  constructor(nombre, descripcion, tipo, cantidad) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.cantidad = cantidad;
  }
}

class Inventario {
  constructor() {
    this.items = {};
  }
  agregarItem(item) {
    if (this.items[item.nombre]) {
      this.items[item.nombre].cantidad += item.cantidad;
    } else {
      this.items[item.nombre] = item;
    }
    console.log(`Se han añadido ${item.cantidad} ${item.nombre}(s) al inventario.`);
  }
  eliminaItem(itemName, cantidad) {
    if (this.items[itemName]) {
      if (this.items[itemName].cantidad >= cantidad) {
        this.items[itemName].cantidad -= cantidad;
        if (this.items[itemName].cantidad === 0) {
          delete this.items[itemName];
        }
        console.log(`Se han eliminado ${cantidad} ${itemName}(s) del inventario.`);
      } else {
        console.log(`No tienes suficientes ${itemName}(s) para eliminar.`);
      }
    } else {
      console.log(`El item ${itemName} no está en el inventario.`);
    }
  }
  mostrarInventario() {
    console.log("Inventario:");
    for (const itemName in this.items) {
      const item = this.items[itemName];
      console.log(`${item.nombre}: ${item.cantidad} unidades`);
    }
  }
}

const jugador = new Player("Tara", 100, 20, 15, 10);
console.log(jugador.info());

const pocion = new Item("Poción", "Restaura 50 de vida", "Consumible", 3);
const espada = new Item("Espada", "Aumenta la fuerza en 10", "Arma", 1);

jugador.inventario.agregarItem(pocion);
jugador.inventario.agregarItem(espada);
jugador.inventario.mostrarInventario();

jugador.inventario.eliminaItem("Poción", 1);
jugador.inventario.mostrarInventario();
