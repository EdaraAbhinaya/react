
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../slice/cartSlice';

export default function Cart() {
  const products = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const cards = products.map((product: ProductType) => (
    <center key={product.id}>
      <div className="col-md-3">
        <Card style={{ width: '15rem' }}>
          <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR.{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </center>
  ));

  return (
    <>
      {/* {JSON.stringify(productCart)} */}
      <div className="row">
        {cards}
      </div>
    </>
  );
}

interface ProductType {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface RootState {
  cart: ProductType[]; // Define your RootState type here
}
