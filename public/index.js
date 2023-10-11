import Character from "./Character/Character.js";
import Knight from "./Knight/Knight.js";
import King from "./King/King.js";
import Assessor from "./Assessor/Assessor.js";
import Squier from "./Squier/Squier.js";

const king = new King("Joffrey Baratheon");
const knightA = new Knight("Jamie Lannister");
const knightB = new Knight("Daenerys Targaryen");
const assessor = new Assessor("Tyrion Lannister", "Daenerys");
const squier = new Squier("Bronn", "Jaime");

const characters = [king, knightA, knightB, assessor, squier];
