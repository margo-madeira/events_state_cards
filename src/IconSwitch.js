import { Store } from "./Store";

export const IconSwitch = (props) => {
  const onSwitch = props.onSwitch;
  const icon = props.icon;
  return (
    <div className="icon">
      <button onClick={onSwitch} className={"btn_icon" + ' ' + `${icon}`}></button>
    </div>
  );
};
