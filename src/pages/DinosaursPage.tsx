import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { DinosFilter } from "../components/DinosFilter/DinosFilter";
import { Loader } from "../components/Loader/Loader";
import { useDinosFilter } from "../components/DinosFilter/hooks/useDinosFilter";
import { DinoCard } from "../components/DinoCard/DinoCard";

export const DinosaursPage = () => {
  const dinosFilterHook = useDinosFilter();
  return (
    <div>
      <PageHeader title="Dinosaurs" />
      <DinosFilter {...dinosFilterHook} />
      {dinosFilterHook.isLoading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <div
            data-items-length={dinosFilterHook.dinosaursToGrid.length}
            className="dinos-cards-grid"
          >
            {dinosFilterHook.dinosaursToGrid.map((dino) => (
              <DinoCard key={dino.id} dino={dino} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
