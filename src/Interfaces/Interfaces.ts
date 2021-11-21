import React from "react";

export interface IProduct {
  id?: string;
  name: string;
  type: string;
  image: string;
}

export type IProducts = {
  products: IProduct[];
}

export interface IUpdateProductModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleShow: () => void;
  handleClose: () => void;
  selectedId?: string;
  updateFunction: (
    data: IUpdateProduct,
    image: File | undefined,
    id?: string
  ) => Promise<void>;
}

export interface IProductItem{
    product: IProduct,
    handleShow: (id?: string) => void,
    deleteProductByID: (id?: string) => Promise<void>
}

export interface IUpdateProduct{
  id?: string;
  name?: string;
  type?: string;
  image?: string;
}
