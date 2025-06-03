import styles from "./page.module.css";

export const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <p className={styles.partnersTitle}>
        We collaborate with some of the most respected names in the space and technology industries
        to make every journey extraordinary.
      </p>
      <div className={styles.partnerContainer}>
        <img
          className={styles.partnerLogo}
          src="/business_partners/alphabet-logo.png"
          alt="Alphabet"
        />
        <img className={styles.partnerLogo} src="/business_partners/amazon_logo.png" alt="Amazon" />
        <img className={styles.partnerLogo} src="/business_partners/CBC_Logo_White.png" alt="CBC" />
        <img
          className={styles.partnerLogo}
          src="/business_partners/Microsoft-Logo-white.png"
          alt="Microsoft"
        />
        <img className={styles.partnerLogo} src="/business_partners/nyu-logo.png" alt="NYU" />
        <img
          className={styles.partnerLogo}
          src="/business_partners/QueensLogo_white.png"
          alt="Queens University"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/samsung-logo.png"
          alt="Samsung"
        />
        <img className={styles.partnerLogo} src="/business_partners/sodexo-logo.png" alt="Sodexo" />
      </div>
    </div>
  );
};
