import "./Bag.css";
import BagItem from "../Bag-item/Bag-item";
import EmptyBag from "../Empty-Bag/Empty-Bag";
const Bag = ({ chosenItems, onClearCart, clearItem }) => {
  // const renderItems = [];

  return (
    <div>
      <div className="bag-header">
        <h2 className="list_heading">
          {" "}
          Bag <span className="badge">{chosenItems.length}</span>
        </h2>
        <p
          onClick={onClearCart}
          className={chosenItems.length > 0 ? "clear-bag" : "clear-bag empty"}
        >
          Clear Bag
        </p>
      </div>
      <div className="cart-items">
        {chosenItems !== null ? (
          chosenItems.length <= 0 ? (
            <EmptyBag />
          ) : (
            chosenItems.map((item) => {
              return (
                <BagItem clearItem={clearItem} key={item.id} details={item} />
              );
            })
          )
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Bag;
