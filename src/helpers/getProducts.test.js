import data from "../products.json";
import { getProducts, onSort } from "./getProducts";
const itemsPerPage = 12;
const pagination = {
  page: 0,
  itemsPerPage: itemsPerPage
};

const filterBySearch = (products, search) => {
  if(!search) return [...products];
  const searchLower = search.toLowerCase();
  return products.filter(product => product.name.toLowerCase().includes(searchLower));
};

const filterByCategory = (products, category) => {
  if (!category) return [...products];
  return products.filter(product => product.categories.includes(category));
}

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

describe('Фильтр по категориям', () => {
  test('Возвращаются товары с категорией Men', () => {
    const { products } = data;
    const filters = {
      search: '',
      category: 'Men',
      prices: {},
      colors: []
    };
    const expectedFilteredByMen = products.filter(product => product.categories.includes(filters.category));
    onSort(expectedFilteredByMen, sortType);
    
    //пагинация
    const startIndex = pagination.page * pagination.itemsPerPage;
    const slicedProducts = expectedFilteredByMen.slice(startIndex, startIndex + pagination.itemsPerPage);
    
    const result = getProducts(pagination, sortType, filters);

    expect(result.products).toEqual(slicedProducts);
    expect(result.total).toBe(expectedFilteredByMen.length)

  });

  test('Если категория не задана, возвращаются все товары', () => {
    const { products } = data;
    const pagination = {
      page: 0,
      itemsPerPage: 1000
    };
    const sortType = '';
    const filters = {
      search: '',
      category: '',
      prices: {},
      colors: []
    };  
    const expectedFiltered = filterByCategory(products, filters.category)
    
    const result = getProducts(pagination, sortType, filters);

    expect(result.products).toEqual(expectedFiltered.slice(0, pagination.itemsPerPage));
    expect(result.total).toBe(expectedFiltered.length);
  })
});

describe('Проверка фильтрации по поиску', () => {
  test('Вoзвращаются товары содержащие "st"', () => {
    const { products } = data;
    const filters = {
      search: 'st',
      category: '',
      prices: {},
      colors: []
    };  
    const expectedFilteredByST = products.filter(product => 
      product.name.toLowerCase().includes(filters.search.toLowerCase())
    );
    onSort(expectedFilteredByST, sortType);

    const startIndex = pagination.page * pagination.itemsPerPage;
    const slicedProducts = expectedFilteredByST.slice(startIndex, startIndex + pagination.itemsPerPage);
    
    const result = getProducts(pagination, sortType, filters);

    expect(result.products).toEqual(slicedProducts);
    expect(result.total).toBe(expectedFilteredByST.length)
  });

  test('Если поисковый запрос пустой, возвращаются все товары', () => {
    const filters = {
      search: '',
      category: '',
      prices: {},
      colors: [],
    };
       const pagination = {
      page: 0,
      itemsPerPage: 1000
    };
    const sortType = '';

    const { products } = data;
    const expectedFilteredSearch = filterBySearch(products, filters.search)

    const result = getProducts(pagination, sortType, filters);

    expect(result.products).toEqual(expectedFilteredSearch.slice(0, pagination.itemsPerPage));
    expect(result.total).toBe(expectedFilteredSearch.length);
  });
});