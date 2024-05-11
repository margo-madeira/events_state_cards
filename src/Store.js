import { useState } from "react";
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";

export const Store = () => {
  const products = useState([
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ]);

  const [icon, setStateIcon] = useState("view_module");
  const [cards, setStateCards] = useState(products);
  const [items, setStateItems] = useState(false);

  const onSwitch = (iconForChange, icon, cards, items, products) => {
    //меняется иконка
    if (iconForChange.target.className.includes("view_module")) {
      setStateIcon((icon = "view_list"));
      setStateCards(false);
      setStateItems((items = products));
    } else {
      setStateIcon((icon = "view_module"));
      setStateCards((cards = products));
      setStateItems(false);
    }
  };

  return (
    <div className="container">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      <CardsView cards={cards} />
      <ListView items={items} />
    </div>
  );
};
