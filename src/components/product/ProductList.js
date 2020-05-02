import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "./Product";
import ShoppingCart from "../shopping-cart/ShoppingCart";
import './ProductList.css';

export default function ProductList({ products, addItemToCart, ...otherProps }) {
  var newProduts = products.map((product, i, arr) => {
    return [...arr.slice(i*3, i*3 + 2)];
  });
  return (
    <Container className="container-list">
      <Container>
        <h3>Por favor seleccione um dos produtos abaixo</h3>
        <hr />
        {newProduts.map(products => (
          <Row>
            {
              products.map(product => (
                <Col key={product.name}>
                  <Product product={product} handleAddToCart={addItemToCart} />
                </Col>
              ))
            }
          </Row>
        ))}
      </Container>
      <ShoppingCart {...otherProps} />
    </Container>
  );
}
