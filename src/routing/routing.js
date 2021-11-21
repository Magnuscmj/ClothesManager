import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import productPage from '../pages/productPage';
import createPage from '../pages/createPage';
import { ProductProvider } from '../Contexts/ProductContext';
import { frontPage } from '../pages/frontPage';
import { filterPage } from '../pages/filterPage';

const Routing = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={frontPage}/>
          <Route path='/productPage' component={productPage} />
          <Route path='/createPage' component={createPage} />
          <Route path='/filterPage' component={filterPage} />
        </Switch>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default Routing;
