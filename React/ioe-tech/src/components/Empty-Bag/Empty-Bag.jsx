import "./Empty-Bag.css";
import emoji from "../../assets/noItem.png";

const EmptyBag = () => {
  return (
    <div className="empty-bag__container">
      <img className="empty-bag__img" src={emoji} alt="" />
      <h2 className="empty-bag__heading"> It's empty here </h2>
      <p className="empty-bag__desc">
        {" "}
        start shopping to add items to your bag
      </p>
    </div>
  );
};

export default EmptyBag;
