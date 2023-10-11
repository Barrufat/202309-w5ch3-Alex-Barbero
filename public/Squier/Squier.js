import Character from "../Character/Character.js";

class Squier extends Character {
  servedCharacter = "knight";
  buttKissingGrade;

  constructor(characterName) {
    super(characterName);
  }

  comunicate() {
    return `${super.comunicate()} I'm a f** loser `;
  }
}

export default Squier;
