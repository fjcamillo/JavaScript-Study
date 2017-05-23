'use strict'

let x = 0

const dat = Promise.resolve(console.log(x))

dat.then(20)
dat.then(30)
