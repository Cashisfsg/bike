import React, { useRef } from 'react';
import Provider from "./containers/context";
import './App.css';
import Header from './containers/header';
import Footer from './containers/footer';
import Order from './containers/order';
import Posts from './containers/posts';
import Product from './containers/product';

function App() {

  const productRef = useRef(null);
  const orderRef = useRef(null);

  const handleProductScroll = () => {
    productRef.current.scrollIntoView({behavior: "smooth", block: "center"})
  }

  const handleOrderScroll = () => {
    orderRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <Provider>
        <Header handleProductScroll = {handleProductScroll}/>
        <Product ref = {productRef} handleOrderScroll = {handleOrderScroll}/>
        <Posts />
        <Order ref = {orderRef}/>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
