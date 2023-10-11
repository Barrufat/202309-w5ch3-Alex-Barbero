import Character from "../Character/Character.js";

class Squier extends Character {
  servedCharacter = "knight";
  buttKissingGrade;

  constructor(characterName) {
    super(characterName);
  }

  communicate() {
    return `${super.comunicate()} I'm a f** loser `;
  }
}

export default Squier;
