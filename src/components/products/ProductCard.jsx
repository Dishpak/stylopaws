import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AddToCartButton from '../helpers/AddToCartButton';
import FeaturedIcon from '../helpers/FeaturedIcon';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`} state={product.id}>
        <div className={'card-image'}>
          <Card.Img variant="top" src={product.image} />
        </div>
      </Link>
      <Card.Body>
        <Card.Title as={Link} to={`/product/${product.id}`} state={product.id}>
          {product.title}
        </Card.Title>
        <Card.Text>{product.price}$</Card.Text>
      </Card.Body>
      <Card.Footer>
        <AddToCartButton product={product} />
        <div>
          <FeaturedIcon product={product} />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
