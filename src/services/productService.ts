import axios from 'axios';
import { IProduct } from '../Interfaces/Interfaces';

//fetch url from server
export const productService = (function () {
  const urlToProductController = 'https://localhost:5001/products';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  //GET
  const getAllProducts = async () => {
    try {
      const result = await axios.get<IProduct[]>(urlToProductController);
      return result.data as IProduct[];
    } catch (e) {
      console.log('Error', e);
      return [];
    }
  };

  //POST
  const postProduct = async (newProduct: IProduct, image: File) => {
    try {
      let formData = new FormData();
      formData.append('file', image);

      axios.post(urlToProductController, newProduct);
      axios({
        url: urlToImageUploadController,
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (e) {
      console.log('Error', e);
    }
  };

  //DELETE
  const deleteProduct = async (id?: string) => {
    try {
      await axios.delete(`https://localhost:5001/products/${id}`);
    } catch (e) {
      console.log('Error', e);
    }
  };

  //PUT
  const updateProduct = async (
    data: IProduct,
    image: File | undefined,
    id?: string
  ) => {
    try {
      let formData = new FormData();

      if (!image) {
        await axios.put(`https://localhost:5001/products/${id}`, data);
        return;
      }
      formData.append('file', image);
      await axios.put(`https://localhost:5001/products/${id}`, data);
      axios({
        url: urlToImageUploadController,
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (e) {
      console.log('Error', e);
    }
  };

  // returns the requests
  return {
    getAllProducts,
    postProduct,
    deleteProduct,
    updateProduct,
  };
})();
