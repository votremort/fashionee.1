export function fetchDataSimulated() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fake data')
    }, 1000);
  })
}