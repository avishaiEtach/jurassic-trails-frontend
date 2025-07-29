import { DinoCard } from "../DinoCard/DinoCard";
import { dinosaurs } from "../../assets/data/consts";
import { Button } from "react-aria-components";

export const FeaturedDinos = () => {
  const featuredDinos = dinosaurs.slice(0, 3);
  return (
    <section className="wrapper featured-dinos-container">
      <div className="flex featured-dinos-header-container">
        <h2 className="featured-dinos-header">
          Discover Fascinating Dinosaurs
        </h2>
        <Button className="featured-dinos-see-all-button">
          <span>see all {"->"}</span>
        </Button>
      </div>
      <div data-aos="fade-up" className="flex featured-dinos-cards-container">
        {featuredDinos.map((dino) => (
          <DinoCard key={dino.id} dino={dino} />
        ))}
      </div>
    </section>
  );
};
