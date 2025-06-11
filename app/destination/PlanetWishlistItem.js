export const PlanetWishlistItem = (props) => {
  return (
    <div className={props.styles.wishlistItem}>
      <img className={props.styles.wishlistItemThumbnail} src={props.thumbnail} alt="" />
      <b>{props.name.toUpperCase()}</b>
      <button onClick={props.onRemove}>remove</button>
    </div>
  );
};
