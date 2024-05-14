export const ShopCard = (props) => {
  const cards = props.cards;

  return (
    <div
      style={{ backgroundImage: `url(${cards.img})` }}
      className="card_cards-view"
    >
      <div className="header">
        <div className="name">{cards.name}</div>
        <div className="color">{cards.color}</div>
      </div>
      <div className="footter">
        <div className="price">${cards.price}</div>
        <button className="add-btn">Add to cart</button>
      </div>
    </div>
  );
};
