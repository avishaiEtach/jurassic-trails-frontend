import React from "react";
import { Dinosaur } from "../../types/dinosaur";
import { Modal } from "../Modal/Modal";
import { useDinoCard } from "./hooks/useDinoCard";
import { DinoModal } from "../DinoModal/DinoModal";
import { Pressable } from "react-aria-components";
import { imageMap } from "../../assets/data/consts";

interface DinoCard {
  dino: Dinosaur;
}

export const DinoCard = ({ dino }: DinoCard) => {
  const {
    chosenDinoId,
    handleClick,
    handleOpenChangeModal,
    getDinoHeaderClassName,
  } = useDinoCard();
  return (
    <>
      <Pressable onClick={() => handleClick(dino.id)}>
        <div className="dino-card">
          <div className="dino-card-image-container">
            {/* <img src={dino.card_image} alt="" /> */}
            <img
              src={imageMap[dino.card_image.split("/").pop() as string]}
              alt=""
            />
          </div>
          <h3 className={getDinoHeaderClassName(dino.name)}>{dino.name}</h3>
        </div>
      </Pressable>
      <Modal
        isOpen={dino.id === chosenDinoId}
        onOpenChange={handleOpenChangeModal}
        modalChildElement={<DinoModal dino={dino} />}
      />
    </>
  );
};
