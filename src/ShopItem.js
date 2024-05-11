import { Store } from "./Store";
import { ListView } from "./ListView";

export const ShopItem = (props) => {
  const items = props.items;
  return (
    <div className="card_list-view">
      <img src={items.img} className="foto_list-view" alt="foto" />
      <div className="name">{items.name}</div>
      <div className="color">{items.color}</div>
      <div className="price">{items.price}</div>
      <button className="add-btn"></button>
    </div>
  );
};
