import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Home from "./components/Home";
import Manager from "./components/management/Manager";
import ProductList from "./components/product/ProductList";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import productsRef from "./services/Firebase";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);

  useEffect(() => {
    productsRef.on("value", snapshot => {
      let productsFromDB = snapshot.val();
      let newProducts = Object.values(productsFromDB);
      setProducts(newProducts);
    });

    calculateShoppingTotal();
  }, [cartItems]);

  function addNewProduct(newProduct) {
    let productIndex = products.indexOf(newProduct);
    const productsArray = [...products];

    if (productIndex >= 0) {
      productsArray[productIndex] = newProduct;
      productsRef.update({ products: productsArray });
    } else {
      productsRef.push(newProduct);
    }
  }

  function addItemToCart(item) {
    let newCartItems = [...cartItems];
    let itemToCart = {
      ...item,
      quantity: 1
    };
    if (newCartItems.some(i => i.name === item.name)) {
      let chosenItem = newCartItems.find(i => i.name === item.name);
      chosenItem.quantity = chosenItem.quantity + 1;
    } else {
      newCartItems.push(itemToCart);
    }
    setCartItems(newCartItems);
  }

  function calculateShoppingTotal() {
    let total = cartItems.reduce((acc, item) => {
      return acc + parseFloat(item.price) * parseFloat(item.quantity);
    }, 0);
    setTotalToPay(total);
  }

  function deleteProduct(item) {
    let index = products.indexOf(item);
    const productsArray = [...products];
    productsArray.splice(index, 1);
    productsRef.update({ products: productsArray });
  }

  return (
    <>
      <Header />

      <Container>
        <Row>
          <Router>
            <Col xs={9}>
              <Route exact path="/" component={Home} />
              <Route exact path="/contacts" component={Contacts} />
              <Route
                exact
                path="/products"
                component={() => (
                  <ProductList
                    addItemToCart={item => addItemToCart(item)}
                    products={products}
                  />
                )}
              />
              <Route
                exact
                path="/manager"
                component={() => (
                  <Manager
                    products={products}
                    deleteProduct={item => deleteProduct(item)}
                    addNewProduct={item => addNewProduct(item)}
                  />
                )}
              />
            </Col>
          </Router>
          <Col xs={2} md={3}>
            <ShoppingCart cartItems={cartItems} totalPrice={totalToPay} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
