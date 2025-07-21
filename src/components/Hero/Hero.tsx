import React from "react";
import {
  ComboBox,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { dinosaurs } from "../../assets/data/consts";

export const Hero = () => {
  return (
    <section className="hero-container-background">
      <div className="wrapper">
        <div className="hero-main-container">
          <h1>Explore The World of Dino's</h1>
          <div className="hero-search-dino-box-container">
            <h3>Discover Dinosaurs in Our Collection</h3>
            <p>
              Search our museum to uncover amazing dinosaurs, rare fossils, and
              prehistoric secrets.
            </p>
            <form className="flex hero-search-form">
              <ComboBox className="hero-autocomplete-combo-box">
                <Input
                  className="hero-autocomplete-input"
                  placeholder="Search for Dinosaur..."
                />
                <Popover className="hero-autocomplete-popover">
                  <ListBox>
                    {dinosaurs.slice(0, 8).map((dino) => (
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
