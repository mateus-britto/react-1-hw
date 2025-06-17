"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>
  const [name, setName] = useState(""); // State for the input field
  const [thumbnail, setThumbnail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value); // Update state when input changes
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.value); // Update state when select changes
  };

  const onAddItemPressed = () => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    if (name && thumbnail) {
      onAddWishlistItem(name, thumbnail); // Pass name and thumbnail to the function
      setName(""); // Clear the name input field
      setThumbnail(""); // Clear the thumbnail selection
    } else {
      alert("Please fill out both fields before adding to the wishlist.");
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name:</label>
      <input id="customWishlist" type="text" value={name} onChange={handleNameChange} />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" value={thumbnail} onChange={handleThumbnailChange}>
        <option value="">Select a thumbnail</option>
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed} className={styles.addButton}>
        ADD CUSTOM
      </button>
    </div>
  );
};
