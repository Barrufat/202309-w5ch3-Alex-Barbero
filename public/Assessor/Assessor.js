import Character from "../Character/Character.js";

class Assessor extends Character {
  assessoredCharacter;

  constructor(characterName, assessoredName) {
    super(characterName);
    this.assessoredCharacter = assessoredName;
  }

  communicate() {
    return `${super.comunicate()} I don't know why, but I'm going to die soon! `;
  }
}

export default Assessor;
