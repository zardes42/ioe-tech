import './App.css';
import Products from './components/Products/Products';


export function addComma(num){
  return parseInt(num).toLocaleString();
}

function App() {
  return (
    <div>
      <Products />
    </div>
  );
}

export default App;
