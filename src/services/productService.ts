import axios from 'axios';
import { IProduct } from '../Interfaces/IProducts';

// fetch url from server
export const productService = (function () {
  const urlToProductController = 'https://localhost:5001/products';

  // GET
  const getAllProducts = async () => {
    const result = await axios.get<IProduct[]>(urlToProductController);
    return result.data as IProduct[];
  };

  // POST
  const postNewProduct = async (newProduct: IProduct) => {
    const result = await axios.post<IProduct>(
      urlToProductController,
      newProduct );
    return result.data as IProduct;
  };

  // returns the request's
  return {
    getAllProducts,
    postNewProduct,
  };
})();
