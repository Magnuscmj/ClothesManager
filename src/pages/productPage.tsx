import Products from '../components/products/Products';
import '../App.css';
import CreateProductForm from '../components/products/CreateProductForm';

function productPage() {
  return (
    <div className='product-Container'>
      <CreateProductForm />
      <Products />
    </div>
  );
}

export default productPage;
