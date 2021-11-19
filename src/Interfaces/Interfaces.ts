export interface IProduct {
    id?: string;
    name: string;
    type: string;
    image: string;
}

export interface IUpdateProductModal{
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    handleShow: () => void,
    handleClose: () => void,
    selectedId?: string,
    updateFunction: (data: IProduct, id?: string) => Promise<void>
}

export interface IUpdateProductForm{
    updateFunction: (data: IProduct, id?: string) => Promise<void>,
    id?: string
}