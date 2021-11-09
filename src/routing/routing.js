import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';
import getPage from '../pages/getPage';
import postPage from '../pages/postPage';
import deletePage from '../pages/deletePage';
import editPage from '../pages/editPage';

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={getPage} />
        <Route path='/postPage' component={postPage} />
        <Route pat='/deletePage' component={deletePage} />
        <Route path='/editPage' component={editPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
