import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Product.css";

export default function Product({ product, handleAddToCart }) {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={product.imgUrl}
          style={{ width: 150, height: 150 }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.text}</Card.Text>
          <Button variant="info" onClick={() => handleAddToCart(product)}>
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Quantidade disponivel: {product.quantityAvailable}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}
