import './Product-item.css' ;
import {addComma} from '../../App.js' ;
 
const ProductItem = ({details, onAdd}) => {
const {id ,title, price, image} = details ;


    return ( 
     <div className="card">
         <div className="card-img">
         <img src={image} className='img' alt={title} />
         </div>
         <div className='card-body'>
         <p className='card-title'>{title}</p>
         <p className='card-price'>NGN{' '}{(addComma(price))}</p>
         <button className='btn-card' onClick={() => onAdd(id)}><i className="fa-solid fa-plus icon"></i>Add</button>
         </div>
        
         </div>
     );
}
 
export default ProductItem;