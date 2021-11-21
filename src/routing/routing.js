import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import productPage from '../pages/productPage';
import createPage from '../pages/createPage';
import { ProductProvider } from '../Contexts/ProductContext';

const Routing = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={productPage} />
          <Route path='/createPage' component={createPage} />
        </Switch>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default Routing;
