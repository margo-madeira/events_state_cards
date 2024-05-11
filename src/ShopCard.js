import { Store } from "./Store";
import { CardsView } from "./CardsView";

export const ShopCard = (props) => {
 const cards = props.cards;
  return (
    <div className="card_cards-view">
      <div className="name">{cards.name}</div>
      <div className="color">{cards.color}</div>
      <img src={cards.img} className="foto_cards-view" alt="foto" />
      <div className="footter">
        <div className="price">{cards.price}</div>
        <button className="add-btn"></button>
      </div>
    </div>
  );
  
};
