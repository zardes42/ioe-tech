import { useState, useEffect } from "react";
import Bag from "../Bag/Bag";
import ProductList from "../Product-list/Product-list";
import Categories from '../Categories/Categories' ;
import "./Products.css";

const Products = () => {
  const endpoint = "https://custom-fakestore.herokuapp.com/products";
  const [items, setItems] = useState(null);
  const [bagList, setBagList] = useState([]);
  const [filteredList , setFilteredList] = useState(null) ;
  const [sortBy, setSortBy ] = useState('All') ;


  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setItems(data))

    
  }, []);
  const onAdd = (id) => {
    const item = filteredList.filter((item) => item.id === id);
    const cartItems = [...bagList];
    if (!cartItems.includes(item[0])) {
      cartItems.push(item[0]);
    }

    setBagList(cartItems);
  };
  const onClearCart = () => {
    setBagList([]);
  };
  const clearItem = (id) => {
    const cartItems = [...bagList];
    const item = cartItems.filter((i) => i.id !== id);
    setBagList(item);
    // console.log(item) ;
  };
  const onSearch = ({ currentTarget }) => {
    let re = new RegExp(currentTarget.value, "ig");
    const result = items.filter((i) => re.test(i.title) === true);
    setFilteredList(result);
  };
  const onSort = (name) => {
    setSortBy(name) ;
    let list = [...items] ;
    const res = [];
     list.forEach(i => {
       if (name === 'All'){
        return setFilteredList(items);
       }
       else if (i.category === name){
            res.push(i) ;
       }
       setFilteredList(res) ;

     });
  }

  if(items !== null){
    if(filteredList === null){

      setFilteredList(items);
    }
  }
  const getCategories =() => {
    const categories = ['All'] ;
   items!== null ? items.forEach(i => {
      if(!categories.includes(i.category)){
          categories.push(i.category) ;
      }
    }) : console.log('items has not been loaded......');

    return categories ;
  }


  return (
    <div className="row">
      <div className="col"><Categories sortBy={sortBy} Categories={getCategories()} onSort={onSort} /> </div>
      <div className="col-mid">
        <ProductList onSearch={onSearch} items={filteredList} onAdd={onAdd} />{" "} ;
      </div>
      <div className="col products_cart">
        <Bag
          chosenItems={bagList}
          clearItem={clearItem}
          onClearCart={onClearCart}
        />
      </div>
    </div>
  );
};

export default Products;
