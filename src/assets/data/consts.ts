import { Dinosaur } from "../../types/dinosaur";
import dinosaursJson from "./dinosaurs.json";
import articlesJson from "./articles.json";
import { Article } from "../../types/article";

const dinosaurs = dinosaursJson as Dinosaur[];

const articles = articlesJson as Article[];

const dietArray = [
  "carnivore",
  "herbivore",
  "omnivore",
  "piscivore",
  "insectivore",
] as Dinosaur["diet"][];

export { dinosaurs, articles, dietArray };
