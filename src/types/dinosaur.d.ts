interface Dinosaur {
  id: string;
  name: string;
  card_image: string;
  period: string;
  diet: "carnivore" | "herbivore" | "omnivore" | "piscivore" | "insectivore";
  length: number; // im meter
  height: number; // im meter
  weight: number; // in tons
  foundIn: string;
  description: string;
}

export { Dinosaur };
