import { delayedGreeting } from "./delay";

jest.useFakeTimers();

test('delayedGreeting вызывает callback с приветствием после 1 секунды', () => {
  const callback = jest.fn();
  delayedGreeting('Alice', callback);

  //callback не вызван сразу
  expect(callback).not.toBeCalled();

  //запуск всех таймеров
  jest.runAllTimers();

  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith('Hello, Alice!')
})