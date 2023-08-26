import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({productData}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productData.imageurl}  />
      <Card.Body>
        <Card.Title>{productData.productName}</Card.Title>
        <Card.Text>
          {productData.description}
        </Card.Text>
        <Button variant="primary">Buy for {productData.price}</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards