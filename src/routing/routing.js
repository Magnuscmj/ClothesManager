import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/homePage/homePage.tsx";
import Navigation from '../components/Navigation/Navigation';


const Routing = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;
