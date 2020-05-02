import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "./Product";

export default function ProductList({ products, addItemToCart }) {
  return (
    <>
      <h3>Por favor seleccione um dos produtos abaixo</h3>
      <hr />
      <Container>
        <Row md={3}>
          {products.map(product => (
            <Col key={product.name}>
              <Product product={product} handleAddToCart={addItemToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
