import React from "react";
import { Dinosaur } from "../../../types/dinosaur";
import LeafIcon from "../../../assets/images/leaf.svg?react";
import MeatIcon from "../../../assets/images/meat.svg?react";
import FishIcon from "../../../assets/images/fish.svg?react";
import BugIcon from "../../../assets/images/bug.svg?react";

interface DinoModalCompsProps {
  dino: Dinosaur;
}
export const DinoModalComps = ({ dino }: DinoModalCompsProps) => {
  const getDietIcon = () => {
    switch (dino.diet) {
      case "herbivore":
        return <LeafIcon />;
      case "piscivore":
        return <FishIcon />;
      case "insectivore":
        return <BugIcon />;
      default:
        return <MeatIcon />;
    }
  };

  const DinoDiet = () => {
    return (
      <div className="dino-diet-container" data-diet={dino.diet}>
        <span className="dino-modal-label">diet :</span>
        {getDietIcon()}
        <span>{dino.diet}</span>
      </div>
    );
  };

  return { DinoDiet };
};
