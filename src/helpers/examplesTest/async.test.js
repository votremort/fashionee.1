import { fetchDataSimulated } from "./async";

jest.useFakeTimers();

test('fetchDataSimulated возвращает "Fake data" после задержки', async () => {
  const promise = fetchDataSimulated();

  //пока таймеры не запущены промис не разрешен
  const immediateResult = jest.fn();
  promise.then(immediateResult);

  expect(immediateResult).not.toBeCalled();

  //прокручиваем таймеры, что бы сработал setTimeout внутри промиса
  jest.runAllTimers();

  //ждем разрешения промиса
  const result = await promise;

  expect(result).toBe('Fake data');
  expect(immediateResult).toHaveBeenCalledWith('Fake data');
})