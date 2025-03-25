//сначала получаем 1 рандомный продукт
export const getRandomProduct = ({ products }) => {
  const getRandomId = Math.floor(Math.random() * 24) + 1; //?
  return products.find((product) => product.id === getRandomId);
}
//получаем три рандом продукта для вывода в lastViewed
export const threeRandomProducts = (data) => {
  const randomProducts = []; //создаем массив для трех продуктов
  const usedId = new Set(); //создаем пустое множснтво уник знач, в котором будут храниться использованные продукты

  while (randomProducts.length < 3) {
    const randomProduct = getRandomProduct(data); //Находим рандом продукт
    //проверяем,нет ли этого продукта в уже использованных
    if (!usedId.has(randomProduct.id)) {
      randomProducts.push(randomProduct); //если этот продукт еще не использован то добавляем его в массив продуктов для вывода на страницу
      usedId.add(randomProduct.id); //добавляем в использованные продукты 
    }
  }
  return randomProducts;
}