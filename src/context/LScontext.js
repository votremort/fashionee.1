import React, { createContext, useContext, useEffect, useState } from 'react';
import { cartKey, favoritesKey } from '../helpers/constant';


//создаем контекст
const LScontext = createContext();

//провайдер контекста
export const LSprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);

  //загрузка данных из лс при монтировании
  useEffect(() => {
    const storedCart = localStorage.getItem(cartKey);
    const storedFavorites = localStorage.getItem(favoritesKey);

    if (storedCart) { //если в лс в корзине что-то есть, то мы записываем это
      setCartItems(JSON.parse(storedCart));
    }
    if (storedFavorites) { //аналогично с тем что выше
      setFavoritesItems(JSON.parse(storedFavorites));
    }
  }, [])

  //обновление корзины
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem(cartKey, JSON.stringify(newCart))
  };

  //обновление избранного
  const updateFavorites = (newFavorites) => {
    setFavoritesItems(newFavorites);
    localStorage.setItem(favoritesKey, JSON.stringify(newFavorites));
  };

  return(
    <LScontext.Provider 
      value={{cartItems, favoritesItems, updateCart, updateFavorites}}>
        {children}
    </LScontext.Provider>
  );
};

export const useLS = () => {
  return useContext(LScontext)
};