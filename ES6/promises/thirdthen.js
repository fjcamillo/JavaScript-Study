'use strict'

const prom = new Promise( (resolve, request, data=0) => {
  if (data === 0){resolve(10))}
  else {reject(console.log('reject'))}
})

prom.then(() => {
  console.log(num)
  return num*2
}).then(() => {
  console.log(num)
  return num*2
}).then(() => {
  console.log(num)
})
