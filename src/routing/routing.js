import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import productPage from '../pages/productPage';

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={productPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
