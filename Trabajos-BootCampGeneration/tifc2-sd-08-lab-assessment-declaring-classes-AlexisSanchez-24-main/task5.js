export class Player {
  constructor(name, level, experience = 0) {
    this.name = name;
    this.level = level;
    this.experience = experience;
    this.experienceThreshold = 100;
  }
  info() {
    return `¡${this.name} ha alcanzado el nivel ${this.level} con ${this.experience} puntos de experiencia!`;
  }
  levelUp() {
    this.level += 1;
    this.experience = 0;
    console.log(`¡${this.name} ha subido al nivel ${this.level}!`);
  }
  gainExperience(points) {
    this.experience += points;
    console.log(`¡${this.name} ha ganado ${points} puntos de experiencia!`);
    if (this.experience >= this.experienceThreshold) {
      this.levelUp();
    }
  }
  }

  let player1 = new Player("Alexis", 1);

  player1.gainExperience(100);

  console.log(player1.info());