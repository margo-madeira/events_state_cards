import { Store } from "./Store";
import { ShopCard } from "./ShopCard";

export const CardsView = (props) => {
  const cards = props.cards;

  return (
    <div className="container_cards">
      {cards.map((el, ind) => {
        <ShopCard key={ind} item={el} />;
      })}
    </div>
  );
};
