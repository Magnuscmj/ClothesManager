import React from "react";

export interface IProduct {
  id?: string;
  name: string;
  type: string;
  image: string;
}

export interface IUpdateProductModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleShow: () => void;
  handleClose: () => void;
  selectedId?: string;
  updateFunction: (
    data: IProduct,
    image: File | undefined,
    id?: string
  ) => Promise<void>;
}

export interface IUpdateProductForm {
  updateFunction: (
    data: IProduct,
    image: File | undefined,
    id?: string
  ) => Promise<void>;
  id?: string;
}

export interface IProductItem{
    product: IProduct,
    handleShow: (id?: string) => void,
    deleteProductByID: (id?: string) => Promise<void>
}
