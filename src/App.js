import React, {useEffect, useState} from 'react';
import './App.css';

import data from './products.json';
import { favoritesKey, cartKey } from './helpers/constant';

import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer/Footer';
import { ContentBlock } from './components/common/ContentBlock/ContentBlock';
import { Showcase } from './components/Showcase/Showcase';
import { Cart } from './components/Cart/Cart';



function App() {
  const [currentPage, setCurrentPage] = useState("Cart");
  const switchPage = (thisPage) => {
    console.log('click')
    setCurrentPage(thisPage);
  }


  return (
    <div className="App">
      <Header     
        switchPage={switchPage} 
      />
      <ContentBlock 
        switchPage={switchPage} 
        currentPage={currentPage} 
      />
      {currentPage === "Cart" ?  <Cart /> : <Showcase />}
      <Footer />
    </div>
  );
}

export default App;
