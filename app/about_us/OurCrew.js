import styles from "./page.module.css";

export const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.crewWrapper}>
      <p className={`${styles.description} ${styles.commonText}`}>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space
        explorers, engineers, and visionaries who are united by a common goal: to make space travel
        accessible and exciting for all.
      </p>
      <div className={styles.crewMemberContainer}>
        <img
          className={styles.crewMember}
          src="/crew/image-anousheh-ansari.png"
          alt="Captain Sarah Vega"
        />
        <p className={styles.commonText}>
          <span className={styles.crewMemberName}>Captain Sarah Vega:</span> A former NASA astronaut with over 15 years of experience,
          Captain Vega leads our missions with unparalleled expertise and a passion for space
          exploration.
        </p>
      </div>
      <div className={styles.crewMemberContainer}>
        <img
          className={styles.crewMember}
          src="/crew/image-douglas-hurley.webp"
          alt="Dr. Leo Redding"
        />
        <p className={styles.commonText}>
          <span className={styles.crewMemberName}>Dr. Leo Redding:</span> Our chief astrophysicist, Dr. Redding, is a renowned
          scientist who has contributed to major space discoveries. He ensures that every journey is
          as educational as it is exhilarating.
        </p>
      </div>
      <div className={styles.crewMemberContainer}>
        <img
          className={styles.crewMember}
          src="/crew/image-anousheh-ansari.png"
          alt="Chief Engineer Hana Lee"
        />
        <p className={styles.commonText}>
          <span className={styles.crewMemberName}>Chief Engineer Hana Lee:</span> With her extensive background in aerospace
          engineering, Hana Lee is responsible for the state-of-the-art technology that powers our
          spacecraft. Her innovation ensures that our travelers are always in safe hands.
        </p>
      </div>
      <div className={styles.crewMemberContainer}>
        <img
          className={styles.crewMember}
          src="/crew/image-mark-shuttleworth.webp"
          alt="Mission Specialist Alex Santos"
        />
        <p className={styles.commonText}>
          <span className={styles.crewMemberName}>Mission Specialist Alex Santos:</span> As a mission specialist, Alex’s job is to
          ensure that every aspect of the journey runs smoothly. With a background in both science
          and adventure tourism, Alex is the perfect guide for our space travelers.
        </p>
      </div>
      <div className={styles.crewMemberContainer}>
        <img
          className={styles.crewMember}
          src="/crew/image-victor-glover.webp"
          alt="Crew Member Maya Patel"
        />
        <p className={styles.commonText}>
          <span className={styles.crewMemberName}>Crew Member Maya Patel:</span> Maya brings a unique blend of technical skills and customer
          service experience to the team. She’s always ready to assist with any needs and to make
          sure every traveler has an unforgettable experience.
        </p>
      </div>
    </div>
  );
};
