import React from 'react';
import './App.css';

import data from './products.json';

import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer/Footer';
import { ContentBlock } from './components/common/ContentBlock/ContentBlock';
import { Showcase } from './components/Showcase/Showcase';



function App() {
  return (
    <div className="App">
      <Header />
      <ContentBlock />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
