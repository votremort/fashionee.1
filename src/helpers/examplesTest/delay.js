export function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}!`)
  }, 1000)
}