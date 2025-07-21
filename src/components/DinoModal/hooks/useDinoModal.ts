import React from "react";
import { Dinosaur } from "../../../types/dinosaur";

interface UseDinoModalProps {
  dino: Dinosaur;
}

export const useDinoModal = ({ dino }: UseDinoModalProps) => {
  const dinoShowWeight =
    dino.weight >= 1 ? `${dino.weight} t` : `${dino.weight * 1000} kg`;
  return { dinoShowWeight };
};
