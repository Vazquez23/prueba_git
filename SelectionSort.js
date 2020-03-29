let anArray = [3,6,8,9,0,3,5,7]

function selectionSort(vector){
  console.log(vector)
  for(let i=0 ; i<vector.length-1 ; i++){
    let menor = i;
    for(let j=i+1 ; j<vector.length ; j++)
    {
       if (vector[menor] > vector[j]) menor = j
    }
    let temp = vector[menor]
    vector[menor] = vector[i]
    vector[i] = temp
  }
  return vector
}

console.log(selectionSort(anArray))
console.log('done...')
