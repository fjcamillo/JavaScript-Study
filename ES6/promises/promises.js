'use strict'

const data = new Promise((resolve, reject) => {
  let x = 1

  if (x==1) return resolve('Stuff Work')
  else return reject(Error("It Broke"))

})

console.log(data.then())
console.log(data.then())
