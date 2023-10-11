import Knight from "./Knight/Knight.js";
import King from "./King/King.js";
import Assessor from "./Assessor/Assessor.js";
import Squier from "./Squier/Squier.js";

const king = new King("Joffrey Baratheon");
const knightA = new Knight("Jamie Lannister");
const knightB = new Knight("Daenerys Targaryen");
const assessor = new Assessor("Tyrion Lannister", "Daenerys");
const squier = new Squier("Bronn", "Jaime");

const charactersArray = [king, knightA, knightB, assessor, squier];

const getCharacterMessages = (characters) => {
  let messages = [];

  characters.forEach((character) => {
    messages.push(character.comunicate());
    console.log(character.serie);
  });

  return messages;
};

console.log(getCharacterMessages(charactersArray));

knightA.die();
assessor.die();
