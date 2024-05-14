export const ShopItem = (props) => {
  const items = props.items;
  return (
    <div  className="card_list-view">
      <img src={items.img} alt='foto' className="foto_list" />
      <div className="name">{items.name}</div>
      <div className="color">{items.color}</div>
      <div className="price">${items.price}</div>
      <button className="add-btn">Add to cart</button>
    </div>
  );
};
