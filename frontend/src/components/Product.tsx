import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../slice/store';
// Make sure to provide the correct path to your RootState type
import { add } from '../slice/cartSlice';
import { getProducts } from '../slice/productSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { RootState } from '../slice/store';

interface ProductType {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  name: string;
}

const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: any) => state.products.cartData);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (product: ProductType) => {
    dispatch(add(product));
  };
  console.log(products, "products");

  const cards = products?.map((product: ProductType) => (
    <center key={product.id}>
      <div className="col-md-3">
        <Card style={{ width: '15rem' }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: '100px', height: '130px' }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR.{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(product)}>
              add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </center>
  ));

  return (
    <>
      <h3>Product</h3>
      <div className="col">{cards ? cards : ''}</div>
    </>
  );
};

export default Product;
