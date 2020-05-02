import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ProductEdit from "./ProductEdit";

export default function Manager({ products, deleteProduct, addNewProduct }) {
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome do Producto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade disponível</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>1</td>
              <td>{product.name}</td>
              <td>{product.text}</td>
              <td>{product.price}</td>
              <td>{product.availableQuantity}</td>
              <td>
                <Button
                  variant="link"
                  onClick={() => setSelectedProduct(product)}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="link" onClick={() => deleteProduct(product)}>
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <p>Adicione ou edite um produto</p>
      <ProductEdit product={selectedProduct} addNewProduct={addNewProduct} />
    </>
  );
}
