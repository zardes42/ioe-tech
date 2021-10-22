import ProductItem from '../Product-item/Product-item';
import './Product-list.css' ;

const ProductList = ({items , onAdd ,onSearch}) => {


    return ( 
        <div className='product_list'>
            <div className='search-bar'>
                <input onChange={(e) => onSearch(e)} className='search-bar__input' type='text' placeholder='Search for products ....' />
                <button className='search-bar__btn' ><i className='fas fa-search'></i></button>
            </div>
            <h2 className='list_heading'>All <span className='badge'>{items!== null? items.length:<p></p>}</span></h2>
            {items!== null ?  items.map(item => <ProductItem details={item} key={item.id} onAdd={onAdd}  />) : <p></p>} 
     </div>
    )}
 
export default ProductList;