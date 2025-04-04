import data from "../products.json";

export const getProducts = (pagination, sortType) => {
  const { products } = data;

  //фильтрация

  //cортировка
  //при загрузке получаем товары и записываем их для сортировки
  const productsForSort = [...data.products];
  //сортируем сначала дешевле
  onSort(productsForSort, sortType);

  //пагинация
  //стартовоая страница пагинации
  const startIndex = pagination.page * pagination.itemsPerPage;
  //Делим товары на страницы
  const slicedProducts = productsForSort.slice(startIndex, startIndex + pagination.itemsPerPage);



  
  return {
    products: slicedProducts,
    total: products.length
  }
}

const onSort = (products, type) => {

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