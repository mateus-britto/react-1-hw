import styles from "./destination.module.css"

export const PlanetWishlistItem = (props) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={props.thumbnail} alt="" />
      <b>{props.name.toUpperCase()}</b>
      <button className={styles.removeBtn} onClick={props.onRemove}>remove</button>
    </div>
  );
};
