import { FC, useState, createContext, useEffect, ChangeEvent} from "react"
import { IProduct, IUpdateProduct } from "../Interfaces/Interfaces";
import { productService } from "../services/productService";
import { ProductContextType } from "../types/ProductContextType";

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: FC = ({children}) => {

    const [products, setProducts] = useState<IProduct[]>([
        { id: 'loading..', name: 'Loading..', type: 'Loading..', image: 'placeholderImage.png' },
      ]);
    
      const [selectedId, setSelectedId] = useState<string | undefined>();
      const [showModal, setShowModal] = useState(false);
    
      const handleClose = () => setShowModal(false);
      const handleShow = (id?: string) => {
        setShowModal(true);
        setSelectedId(id);
        console.log(selectedId);
      };
    
      // useEffect
      useEffect(() => {
        getProducts();
      }, []);
    
      const getProducts = async () => {
        const result = await productService.getAllProducts();
        setProducts(result);
      };
    
      const deleteProductByID = async (id?: string) => {
        await productService.deleteProduct(id);
        getProducts();
      };
    
      const updateProduct = async (
        data: IUpdateProduct,
        image: File | undefined,
        id?: string
      ) => {
        await productService.updateProduct(data, image, id);
        getProducts();
        handleClose();
      };

      const [newProduct, setNewProduct] = useState<IProduct>({
        name: '',
        image: 'placeholderImage.png',
        type: '',
      });

      const [newImage, setNewImage] = useState<File>();
    
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;
        let value;
        
        switch (name) {
          case 'name':
            value = event.target.value;
            setNewProduct({ ...newProduct, name: value });
            break;
          case 'image':
            let { files } = event.target;
            if (files) {
              setNewProduct({ ...newProduct, image: files[0].name });
              setNewImage(files[0]);
            }
            break;
          case 'type':
            value = event.target.value;
            setNewProduct({ ...newProduct, type: value });
            break;
        }
      };

    return (
        <ProductContext.Provider value={{products, handleChange,  newProduct, setNewProduct, newImage, setNewImage, setProducts, selectedId, setSelectedId, handleClose, handleShow, showModal, setShowModal, getProducts, deleteProductByID, updateProduct}}>
            {children}
        </ProductContext.Provider>
    )

}