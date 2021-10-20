import { useState } from "react";
import { addComma } from "../../App.js";
import "./Bag-item.css";

const BagItem = ({ details, clearItem }) => {
  const [count, setCount] = useState(1);

  const onChange = ({ currentTarget }) => {
    if (currentTarget.id === "increase") {
      setCount(count + 1);
    } else if (currentTarget.id === "decrease") {
      setCount(count - 1);
    }
  };
  if (count < 1) {
    clearItem(details.id);
  }

  const { title, price } = details;
  return (
    <div className="bag-item__card">
      <div className="bag-item__card-body">
        <p className="bag-item__card-title">{title}</p>
        <p className="bag-item__price-desc"> Per piece</p>
        <div className="bag-item___footer">
          <p className="bag-item__card-price">NGN {addComma(price)}</p>
          <div className="bag-item__counter">
            <span
              id="decrease"
              className="badge bag-item__counter"
              onClick={(e) => onChange(e)}
            >
              -
            </span>
            <span className=" bag-item__counter number">{count} </span>
            <span
              id="increase"
              className="badge bag-item__counter "
              onClick={(e) => onChange(e)}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
