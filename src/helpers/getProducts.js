import data from "../products.json";

export const getProducts = (pagination, sortType, filters) => {
  const { products } = data;
  
  //фильтрация
  const productsForModify = onFilter(filters, products);

  //cортировка
  //сортируем сначала дешевле
  onSort(productsForModify, sortType);

  //пагинация
  //стартовоая страница пагинации
  const startIndex = pagination.page * pagination.itemsPerPage;
  //Делим товары на страницы
  const slicedProducts = productsForModify.slice(startIndex, startIndex + pagination.itemsPerPage);

  return {
    products: slicedProducts,
    total: productsForModify.length
  }
}

export const onSort = (products, type) => {

  switch (type) {
    case 'nameAsc':
      products.sort((a, b) => a.name > b.name ? 1 : -1);
      break;
    case 'nameDesc':
      products.sort((a, b) => a.name < b.name ? 1 : -1);
      break;
    case 'priceAsk':
      products.sort((a, b) => a.price > b.price ? 1 : -1);
      break;
    case 'priceDesk':
      products.sort((a, b) => a.price < b.price ? 1 : -1);
      break;
    default:
  }
}

const onFilter = (filters, products) => {
  let productsForModify = [...products];

//поиск
  if(filters.search) {
    const searchLowerCase = filters.search.toLowerCase();
    productsForModify = productsForModify.filter((product) => product.name.toLowerCase().indexOf(searchLowerCase)!== -1);
  }
//категория
  if(filters.category) {
    productsForModify = productsForModify.filter((product) => product.categories.includes(filters.category));
  }
//цена
  if(filters.prices.min && filters.prices.max) {
    productsForModify = productsForModify.filter((product) => {
      return product.price >= filters.prices.min && product.price <= filters.prices.max
    })
  } else if(filters.prices.min) {
    productsForModify = productsForModify.filter((product) => product.price >= filters.prices.min)
  } else if(filters.prices.max) {
    productsForModify = productsForModify.filter((product) => product.price <= filters.prices.max)
  }
//цвета
  if(filters.colors.length > 0) {
    productsForModify = productsForModify.filter((product) => filters.colors.includes(product.color))
  }

  return productsForModify
}

