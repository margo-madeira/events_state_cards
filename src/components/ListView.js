import { ShopItem } from "./ShopItem";

export const ListView = (props) => {
  const items = props.items;
  return (
    <div className="container_list">
      {items[0].map((el, ind) => {
        return <ShopItem key={ind} items={items[0][ind]} />;
      })}
    </div>
  );
};
