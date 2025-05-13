import React, { useState } from 'react';
import { LSprovider } from './context/LScontext';
import './App.css';

import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer/Footer';
import { ContentBlock } from './components/common/ContentBlock/ContentBlock';
import { Showcase } from './components/Showcase/Showcase';
import { Cart } from './components/Cart/Cart';



function App() {
  const [currentPage, setCurrentPage] = useState("Shop");
  const switchPage = (thisPage) => {
    console.log('click')
    setCurrentPage(thisPage);
  }


  return (
  <LSprovider>
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
  </LSprovider>
    
  );
}

export default App;
