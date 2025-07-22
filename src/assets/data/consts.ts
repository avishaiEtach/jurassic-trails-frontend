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

const images = import.meta.glob("../../assets/images/*.png", {
  eager: true,
  import: "default",
});

const imageMap: Record<string, string> = {};

for (const path in images) {
  const fileName = path.split("/").pop(); // למשל: 'rex.png'
  if (fileName) {
    imageMap[fileName] = images[path] as string;
  }
}

export { dinosaurs, articles, dietArray, imageMap };
