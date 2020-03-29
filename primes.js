function primes(n){
  let r = true
  for(let i = 2; i <= 7; i++){
    if(n%i===0 || n === 0 || n === 1){
      r = false
      break
    }
  }
  return r
}

console.log((primes(12)) ? 'Es un número primo' : 'No es un número primo')