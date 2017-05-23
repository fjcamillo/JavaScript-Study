'use strict'

const data = [1, 2, 3]

data.map((v) => {console.log(v)})

console.log(data.reduce((v, i) => {return v+i}))

console.log(data.filter((v) => {return v>1}))
