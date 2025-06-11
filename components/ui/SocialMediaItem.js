import styles from ".//Footer.module.css";

export const SocialMediaItem = (props) => {
  return (
    <li className={styles.socialMediaItem}>
      <a
        className={styles.socialMediaLink}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.icon}
          src={props.icon}
          alt={`${props.title} icon`}
          className={styles.icon}
        />
        {props.title}
      </a>
    </li>
  );
};
