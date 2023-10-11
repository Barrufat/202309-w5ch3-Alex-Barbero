import Character from "../Character/Character.js";

class King extends Character {
  reignedYears;

  constructor(characterName) {
    super(characterName);
  }

  comunicate() {
    return `${super.comunicate()} You're all going to die! `;
  }
}

export default King;
