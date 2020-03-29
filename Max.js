let anArray = [3,9,2,6,8]
let max = anArray[0]
for(x of anArray){
  if(x > max)
    max = x
}
console.log(max)