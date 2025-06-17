"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "@/components/destination/PlanetWishlistItem"; 

// Week 2: PlanetCard Component
const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={`${name} thumbnail`} />
      <div className={styles.planetDescription}>
        <h2>
          {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={() => onAddOrRemovePlanet(name)}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  // Week 2: Function to toggle planets in the wishlist
  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prevSelected) => {
      if (prevSelected.some((planet) => planet.name === name)) {
        return prevSelected.filter((planet) => planet.name !== name);
      } else {
        return [...prevSelected, { name }];
      }
    });
  };

  // Week 3: Function to add a planet to the wishlist
  const onAddWishlistItem = (name, thumbnail) => {
    setSelectedPlanets((prevSelected) => {
      if (!prevSelected.some((planet) => planet.name === name)) {
        return [...prevSelected, { name, thumbnail }];
      }
      return prevSelected;
    });
  };

  // Week 3: Function to remove a planet from the wishlist
  const removeFromWishlist = (name) => {
    setSelectedPlanets((prevSelected) =>
      prevSelected.filter((planet) => planet.name !== name)
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* Week 3: Import the AddWishlistItem react component */}
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />

          {/* Week 3: Convert the list, so it is using selectedPlanets.map() to display the items */}
          {selectedPlanets.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <>
              <h3>Your current wishlist</h3>
              <div className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet.name}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => removeFromWishlist(planet.name)}
                  />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* Week 2: Add all 4 planets */}
          <PlanetCard
            name="Europa"
            description="Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface."
            thumbnail="/destination/image-europa.png"
            isSelected={selectedPlanets.some((planet) => planet.name === "Europa")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name="Moon"
            description="The Moon, Earth's closest celestial neighbor, offers stunning craters and desolate landscapes."
            thumbnail="/destination/image-moon.png"
            isSelected={selectedPlanets.some((planet) => planet.name === "Moon")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name="Mars"
            description="Mars, the Red Planet, is a barren yet fascinating world with vast deserts and towering volcanoes."
            thumbnail="/destination/image-mars.png"
            isSelected={selectedPlanets.some((planet) => planet.name === "Mars")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name="Titan"
            description="Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes."
            thumbnail="/destination/image-titan.png"
            isSelected={selectedPlanets.some((planet) => planet.name === "Titan")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;