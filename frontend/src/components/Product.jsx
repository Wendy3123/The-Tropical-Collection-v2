import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
// use Link to replace a tags so page doesnt refresh everytime it goes to a different page and change Link href= to Link to=

function Products({ product }) {
  // my-3 is margin y axis 3 and padding all around 3 and also rounded
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Products;
