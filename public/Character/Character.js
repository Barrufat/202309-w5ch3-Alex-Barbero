class Character {
  name;
  family;
  age;
  isAlive = true;
  serie = "Game of Thrones";

  constructor(characterName) {
    this.name = characterName;
  }
  die() {
    this.isAlive = false;
  }

  comunicate() {
    return `Hi, I'm ${this.name}!`;
  }
}

export default Character;
