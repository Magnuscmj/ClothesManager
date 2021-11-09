import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';
import homePage from '../pages/homePage';

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={homePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
