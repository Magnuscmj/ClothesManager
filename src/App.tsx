import './App.css';
import { ProductProvider } from './Contexts/ProductContext';
import Routing from './routing/routing';


function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Routing />
      </ProductProvider> 
    </div>
  );
}

export default App;
