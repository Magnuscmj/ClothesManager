import React, { ChangeEvent, useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductContext } from '../../Contexts/ProductContext';
import { IProduct } from '../../Interfaces/Interfaces';
import { ProductContextType } from '../../types/ProductContextType';
import { ProductCard } from './ProductCard';
import { UpdateProductModal } from './UpdateProductModal';

export const FilterProducts = () => {
    const {products, handleShow, deleteProductByID} = useContext(ProductContext) as ProductContextType;
    const [selectedValue, setSelectedValue] = useState('');
    
    let typesTest: Array<string> = [];

    const getTypes = () => {
        products.forEach(product => {
        if(!typesTest.includes(product.type)){ 
            typesTest.push(product.type);
        }
        })
    }

    const renderFilteredProducts = (type: string) => {
        const filteredProducts = products.filter(product => {
          return product.type === type
        });
    
        return filteredProducts.map((product: IProduct, key: number) => {
          return(
            <Col key={key}>
              <div className='card-container'>
                <ProductCard
                  product={product}
                  handleShow={handleShow}
                  deleteProductByID={deleteProductByID}
                />
              </div>
            </Col>
          )
        })
      }

    const createOptions = () => {
        return typesTest.map((type: string, key: number) => {
          return <option value={type} key={key}>{type}</option>
        })
      }

    getTypes();
   
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
      }
    return (
        <Container>
        <Row>
            <Col>
            <h4>Filter products</h4>
            </Col>
        </Row>
        <Row>
            <Col>
            <select onChange={handleChange} name="typeFilter" id="typeFilter">
                {createOptions()}
            </select>
            </Col>
        </Row>
        <Row>
            {renderFilteredProducts(selectedValue)}
        </Row>
        <UpdateProductModal/>
        </Container>
    )
}
