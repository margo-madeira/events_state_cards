import { ShopCard } from "./ShopCard";

export const CardsView = (props) => {
  const cards = props.cards;

  return (
    <div className="container_cards">
      {cards[0].map((el, ind) => {
        return <ShopCard key={ind} cards={cards[0][ind]} />;
      })}
    </div>
  );
};
