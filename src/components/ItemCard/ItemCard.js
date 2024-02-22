import "./ItemCard.css";
import likeButton from "../../images/likebutton.svg";
import likeButtonActive from "../../images/likebuttonactive.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onOpenItem, cardSelect, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const imageSrc = isLiked ? likeButtonActive : likeButton;

  const handleSelect = () => {
    cardSelect({ item });
    onOpenItem();
  };

  const handleLike = () => {
    console.log(item);
    const id = item._id;
    onCardLike({ id, isLiked, currentUser });
  };

  return (
    <li>
      <div className="itemCard">
        <img
          className="itemCard__image"
          src={item.imageUrl}
          onClick={handleSelect}
          alt={item.name}
        ></img>
        <h3 className="itemCard__title">{item.name}</h3>{" "}
        <button className="itemCard__likeButton" onClick={handleLike}>
          <img
            className="likeButton__image"
            src={imageSrc}
            alt="like bnutton"
          ></img>
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
