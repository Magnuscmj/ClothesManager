import axios from 'axios';
import { IProduct } from '../Interfaces/IProducts';

// fetch url from server
export const productService = (function () {
  const urlToProductController = 'https://localhost:5001/products';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  // GET
  const getAllProducts = async () => {
    const result = await axios.get<IProduct[]>(urlToProductController);
    return result.data as IProduct[];
  };

  // POST
  const postProduct = async (newProduct: IProduct, image: File) => {
    let formData = new FormData();
    formData.append( "file", image );
    
    axios.post(urlToProductController, newProduct);
    axios({
      url: urlToImageUploadController,
      method: 'POST',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

  //DELETE

  const deleteProduct = async (id?: string) => {
    await axios.delete(`https://localhost:5001/products/${id}`)
  }

  //Update
  const updateProduct = async (id: string, data: IProduct) => {
    await axios.put(`https://localhost:5001/products/${id}`, data)
  }

  // returns the requests
  return {
    getAllProducts,
    postProduct,
    deleteProduct,
    updateProduct
  };
})();
