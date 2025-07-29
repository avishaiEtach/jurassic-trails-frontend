import { Dinosaur } from "../../types/dinosaur";
import { useDinoModal } from "./hooks/useDinoModal";
import { DinoModalComps } from "./hooks/DinoModalComps";
import { imageMap } from "../../assets/data/consts";

interface DinoModalProps {
  dino: Dinosaur;
}

export const DinoModal = ({ dino }: DinoModalProps) => {
  const { dinoShowWeight } = useDinoModal({ dino });
  const { DinoDiet } = DinoModalComps({ dino });
  return (
    <div className="dino-modal-main-container">
      <div className="dino-modal-image-container">
        <img
          src={imageMap[dino.card_image.split("/").pop() as string]}
          alt=""
        />
      </div>
      <div className="flex column" style={{ flex: 1 }}>
        <div className="dino-modal-info-container">
          <h1>{dino.name}</h1>
          <ul>
            <li>
              <DinoDiet />
            </li>
            <li>
              <span className="dino-modal-label">length :</span>
              <span>{dino.length} m</span>
            </li>
            <li>
              <span className="dino-modal-label">height :</span>
              <span>{dino.height} m</span>
            </li>
            <li>
              <span className="dino-modal-label">weight :</span>
              <span>{dinoShowWeight}</span>
            </li>
            <li>
              <span className="dino-modal-label">found in :</span>
              <span>{dino.foundIn}</span>
            </li>
          </ul>
        </div>
        <p className="dino-modal-sort-description">{dino.description}</p>
      </div>
    </div>
  );
};
