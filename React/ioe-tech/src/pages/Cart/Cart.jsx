import {Link} from 'react-router-dom' ;
import './Cart.css' ;
import EmptyBag from "../../components/Empty-Bag/Empty-Bag";

const Cart = () => {
    return ( 
        <div className='cart'>
            
            <div className='empty-cart'>
            <EmptyBag />
            <div className='empty-cart-btn__container'>
            <Link to='/' ><button className='empty-cart__btn'>Back to Homepage</button></Link>
            </div>

            </div>
        </div>
     );
}
 
export default Cart;