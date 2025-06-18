"use client";

require("dotenv").config();
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// TASK - React 1 week 3
// Use the environment variable for the API key
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// TASK - React 1 week 3
// Define NASA API URLs
const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

// TASK - React 1 week 3
// Fetch and display data from NASA APIs
export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  // TASK - React 1 week 3
  // Fetch Astronomy Picture of the Day
  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then((response) =>
          response.json()
        );
        console.log("Rover Photos Response:", roverPhotoResponse); // Debugging
        setRoverPhoto(roverPhotoResponse);
      } catch (error) {
        console.error("Error fetching rover photos:", error);
      }
    };

    const fetchAstronomyPicOfTheDay = async () => {
      try {
        const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then((response) =>
          response.json()
        );
        console.log("Astronomy Picture of the Day Response:", dailyImgResponse); // Debugging
        setDailyImg(dailyImgResponse);
      } catch (error) {
        console.error("Error fetching astronomy picture of the day:", error);
      }
    };

    fetchRoverPhotos();
    fetchAstronomyPicOfTheDay();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          {/* TASK - React 1 week 3 */}
          {/* Display Astronomy Picture of the Day */}
          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img className={styles.nasaPicOfTheDayImg} src={dailyImg.url} alt={dailyImg.title} />
            </>
          ) : (
            <p>Loading Astronomy Picture of the Day...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* TASK - React 1 week 3 */}
          {/* Display Mars Rover Photos */}
          {roverPhoto?.photos?.length ? (
            roverPhoto.photos.map((photo, index) => (
              <div key={index}>
                <p>Date: {photo.earth_date}</p>
                <p>Rover Name: {photo.rover.name}</p>
                <img className={styles.nasaPicOfTheDayImg} src={photo.img_src} alt="Rover Photo" />
              </div>
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
