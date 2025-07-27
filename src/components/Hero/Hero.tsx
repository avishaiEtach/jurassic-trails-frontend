import React, { useState } from "react";
import {
  ComboBox,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { dinosaurs } from "../../assets/data/consts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export const Hero = () => {
  const [selectDinoId, setSelectDinoId] = useState<string>("");
  const navigate = useNavigate();
  return (
    <section className="hero-container-background">
      <div className="wrapper">
        <div className="hero-main-container">
          <h1 data-aos="fade-up">Explore The World of Dino's</h1>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="hero-search-dino-box-container"
          >
            <h3>Discover Dinosaurs in Our Collection</h3>
            <p>
              Search our museum to uncover amazing dinosaurs, rare fossils, and
              prehistoric secrets.
            </p>
            <form
              className="flex hero-search-form"
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`${ROUTES.DINOSAURS}/?dinoId=${selectDinoId}`);
              }}
            >
              <ComboBox
                onSelectionChange={(value) => {
                  setSelectDinoId(value as string);
                  // navigate(`${ROUTES.DINOSAURS}/?dinoId=${value}`);
                }}
                className="hero-autocomplete-combo-box"
              >
                <Input
                  className="hero-autocomplete-input"
                  placeholder="Search for Dinosaur..."
                />
                <Popover className="hero-autocomplete-popover">
                  <ListBox>
                    {dinosaurs.map((dino) => (
                      <ListBoxItem
                        className="hero-autocomplete-list-box-item"
                        id={dino.id}
                        key={dino.id}
                      >
                        {dino.name}
                      </ListBoxItem>
                    ))}
                  </ListBox>
                </Popover>
              </ComboBox>
              <button>
                <span>Submit{"->"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
