import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function ProductEdit({ product, addNewProduct }) {
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    product && setInputs(product);
  }, [product]);

  function handleSubmit(event) {
    event.preventDefault();
    addNewProduct(inputs);
  }

  function handleInputChange(event) {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Nome do Producto</Form.Label>
            <Form.Control
              type="text"
              value={inputs.name || ""}
              onChange={handleInputChange}
              placeholder="Insira o nome do Producto"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="quantityAvailable">
            <Form.Label>Quantidade disponível</Form.Label>
            <Form.Control
              type="number"
              onChange={handleInputChange}
              value={inputs.quantity || ""}
              placeholder="Quantidade"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="text">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInputChange}
            value={inputs.text || ""}
            placeholder="Insira aqui uma descrição do producto..."
          />
        </Form.Group>

        <Form.Group controlId="imgUrl">
          <Form.Label>Imagem (url)</Form.Label>
          <Form.Control
            value={inputs.imgUrl || ""}
            onChange={handleInputChange}
            placeholder="Url da imagem do producto"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="price">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              value={inputs.price || ""}
              type="number"
              onChange={handleInputChange}
              placeholder="Quanto custa?"
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
