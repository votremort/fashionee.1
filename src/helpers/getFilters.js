export const getFilters = ({ products }) => {
  //создаем объект с начальынми значениями всей нужной информации для фильтров
  const filtersInfo = {
    categories: new Set(), 
    prices: {  
      min: 0,
      max: 0
    },
    colors: new Set() 
  };

  //перебираем товары
  products.forEach((product) => {

    product.categories.forEach((category) => {
      filtersInfo.categories.add(category);
    });

    if (product.price > filtersInfo.prices.max) {
      filtersInfo.prices.max = product.price
    };


    filtersInfo.colors.add(product.color);
  });

  //преобразование множеств SET в массив, для дальнейшего использования 
  filtersInfo.categories = [...filtersInfo.categories];
  filtersInfo.colors = [...filtersInfo.colors];
  return filtersInfo
}