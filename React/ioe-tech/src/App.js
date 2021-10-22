import {Switch,Route} from 'react-router-dom' ;
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import Cart from './pages/Cart/Cart';


export function addComma(num){
  return parseInt(num).toLocaleString();
}

function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path ='/'>
          <Products />
        </Route>
        <Route exact path='/cart'>
          <Cart />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
