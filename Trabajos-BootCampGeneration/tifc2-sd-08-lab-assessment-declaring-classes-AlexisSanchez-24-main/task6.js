class Player {
  constructor(name, level, experience = 0) {
    this.name = name;
    this.level = level;
    this.experience = experience;
  }
  info() {
    return `¡${this.name} ha alcanzado el nivel ${this.level} con ${this.experience} puntos de experiencia!`;
  }
}

class Group {
  constructor() {
    this.members = [];
  }

  addPlayer(player) {
    this.members.push(player);
    console.log(`¡${player.name} se ha unido al grupo!`);
  }

  removePlayer(playerName) {
    this.members = this.members.filter(player => player.name !== playerName);
    console.log(`¡${playerName} ha sido eliminado del grupo!`);
  }
  groupInfo() {
    return this.members.map(player => player.info()).join('\n');
  }
}

const jugador1 = new Player("Tara", 6);
const jugador2 = new Player("Leo", 5);

const grupo = new Group();
grupo.addPlayer(jugador1); 
grupo.addPlayer(jugador2);

console.log(grupo.groupInfo());

grupo.removePlayer("Tara");

console.log(grupo.groupInfo());


