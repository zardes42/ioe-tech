import {Link} from 'react-router-dom' ;
import './NavBar.css' ;
import logo from '../../assets/logo.png';
const NavBar = () => {
    return ( 
        <div className ='navbar'>
            <div className ='navbar-logo'>
                <img  src={logo} alt='' className='navbar-logo__img' />
                <div className ='navbar-logo__text'>
                    <h2 className='navbar-logo__heading'>Target</h2>
                    <p className ='navbar-logo__desc'>Cham Towers, Plot 12 Lekki Rd, Lagos. Ng</p>
                </div>

            </div>
            <div className='navbar-menu'>
                <Link to='/cart'><div className='navbar-menu__item' > <i className="fas fa-shopping-cart icons "></i><span className= 'navbar-menu__text' >Bag</span></div></Link>
               <Link to='/account'> <div className='navbar-menu__item' > <i className="fas fa-user icons"></i><span className='navbar-menu__text'>Account</span></div></Link>

            </div>
        </div>
     );
}
 
export default NavBar;