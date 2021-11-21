import { FC, useState, createContext, useEffect  } from "react"
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


    return (
        <ProductContext.Provider value={{products, setProducts, selectedId, setSelectedId, handleClose, handleShow, showModal, setShowModal, getProducts, deleteProductByID, updateProduct}}>
            {children}
        </ProductContext.Provider>
    )

}