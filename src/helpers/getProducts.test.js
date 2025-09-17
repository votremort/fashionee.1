import data from "../products.json";
import { getProducts, onSort } from "./getProducts";
const itemsPerPage = 12;
const pagination = {
  page: 0,
  itemsPerPage: itemsPerPage
};

const sortType = 'priceAsk';
describe('проверяем работу фильтрa Colors', () => {
  test('По фильтру Red вернулись товары с цветом Red', () => {
    const { products } = data;
    const filters = {
      search: '',
      category: '',
      prices: {},
      colors: ['Red']
    }

    const info = getProducts(pagination, sortType, filters);
    const filteredByRedColor = products.filter((product) => product.color === 'Red')
    onSort(filteredByRedColor, sortType)
    expect(info.products).toEqual(filteredByRedColor)
  });

    test('По фильтру Brown, Red, Blue вернулись товары с данными цветами', () => {
    const { products } = data;
    const filters = {
      search: '',
      category: '',
      prices: {},
      colors: ['Red', 'Brown', 'Blue' ]
    }

    const info = getProducts(pagination, sortType, filters);
    const filteredByRedColor = products.filter((product) => product.color === 'Red' || product.color === 'Brown' || product.color === 'Blue')
    
    onSort(filteredByRedColor, sortType)

    //пагинация
    //стартовоая страница пагинации
    const startIndex = pagination.page * pagination.itemsPerPage;
    //Делим товары на страницы
    const slicedProducts = filteredByRedColor.slice(startIndex, startIndex + pagination.itemsPerPage);
    
    
    expect(info.products).toEqual(slicedProducts)
  });
});