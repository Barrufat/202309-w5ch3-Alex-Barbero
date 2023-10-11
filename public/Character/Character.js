class Character {
  name;
  family;
  age;
  isAlive = true;
  serie = "Game of Thrones";

  die() {
    this.isAlive = false;
  }

  comunicate() {
    return `Hi, I'm ${this.name}!`;
  }
}

export default Character;
