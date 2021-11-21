import { ChangeEvent } from "react";
import { IProduct, IUpdateProduct } from "../Interfaces/Interfaces";

export type ProductContextType = {
    selectedId?: string
    setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    handleClose: () => void
    handleShow: (id?: string) => void
    getProducts: () => Promise<void>
    deleteProductByID: (id?: string) => Promise<void>
    updateProduct: (
        data: IUpdateProduct,
        image: File | undefined,
        id?: string) => Promise<void>

}