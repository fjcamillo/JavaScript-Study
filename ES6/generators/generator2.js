'use strict'

function* gen(x){
  for(let i=0; i<=10; i++){
    yield x++
  }
  return x
}

const g = gen(2)

for(let y=0;y<=10;y++){
  console.log(g.next())
}
console.log(g.next())
