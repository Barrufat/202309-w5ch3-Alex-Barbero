import Character from "../Character/Character.js";

class Kight extends Character {
  weapon;
  skills;

  constructor(characterName) {
    super(characterName);
  }

  comunicate() {
    return `${super.comunicate()} I first hit and then ask! `;
  }
}

export default Kight;
