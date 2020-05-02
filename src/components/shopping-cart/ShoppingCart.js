import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './ShoppingCart.css';

export default function ShoppingCart({ cartItems, totalPrice }) {
  return (
    <>
      <Card>
        <Card.Header>Carrinho de Compras</Card.Header>
        <Card.Body>
          <Card.Title>Produtos adicionados:</Card.Title>
          <Card.Text>
            {cartItems.map(item => (
              <p key={item.name}>
                {item.quantity} x {item.name}
              </p>
            ))}
            <hr />
            <h4>Total a pagar: {totalPrice}</h4>
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </>
  );
}
