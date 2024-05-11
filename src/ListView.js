import { Store } from "./Store";
import { ShopItem } from "./ShopItem";

export const ListView = (props) => {
  const items = props.items;
  return (
    <div className="container_list">
      {items.map((el, ind) => {
        <ShopItem key={ind} item={el} />;
      })}
    </div>
  );
};
