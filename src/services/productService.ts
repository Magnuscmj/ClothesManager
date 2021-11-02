import axios from "axios";
import { IProduct } from "../Interfaces/IProducts";

export const productService = ( function () {

    const urlToProductController = "https://localhost:5001/products";

    const getAllProducts = async () => {
        const result = await axios.get<IProduct[]>( urlToProductController );
        return result.data; // ["data"]
    }

    return {
        getAllProducts
    }

} () );