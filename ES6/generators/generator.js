'use strict'

function* gen(x){
  yield x++
  return x
}

const g = gen(2)

console.log(g.next())
console.log(g.next())
