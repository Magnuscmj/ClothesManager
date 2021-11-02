import "./homePage.Style.scss";
import {FC} from "react";
import Products from '../../components/Products/Products';

const HomePage: FC = () => (
    <div className='homePage'>
        <Products />
    </div>
);

export default HomePage;