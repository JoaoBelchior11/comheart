import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contacts from './components/Contacts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {productsMock} from './components/product/products-mock'
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import Home from './components/Home'
import ProductList from './components/product/ProductList'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [totalToPay, setTotalToPay] = useState(0)

  useEffect(()=> {
    setProducts(productsMock)
    calculateShoppingTotal()
  })

  function addItemToCart(item){

    let newCartItems = [...cartItems]
    let itemToCart = {
      ...item,
      quantity: 1,
    }
    if(newCartItems.some(i => i.name === item.name)){
     let chosenItem = newCartItems.find(i => i.name === item.name)
     chosenItem.quantity = chosenItem.quantity + 1
    }  else {
      newCartItems.push(itemToCart)
    }
    setCartItems(newCartItems)
  }

  function calculateShoppingTotal(){
    let total = cartItems.reduce((acc, item) => {
     return acc + item.price * item.quantity
    },0)
    setTotalToPay(total)
  }

  return (
   <>
   <Router>
    <Header/>
    <Container>
      <Row>
        <Col xs={9}>
      <Route exact path="/" component={Home} />
     <Route exact path="/contacts" component={Contacts} /> 
     <Route exact path="/products" component={() => <ProductList addItemToCart={(item) => addItemToCart(item)}  products={products} />} />
     </Col>
     <Col xs={3}> 
     <ShoppingCart cartItems={cartItems} totalPrice={ totalToPay}/>
     </Col>
      </Row>
 

    </Container>
    </Router>
   </>
  );
}

export default App;
