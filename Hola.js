Proceso selectioSort

  Para i <- 0 Hasta i < vector.length - 1 ( Con Paso i++ ) hacer
  
    menor <- i
    
    para j <- i+1 hasta j < vector.length (con paso j++) hacer
    
      si vector[menor] > vector[j] 
      entonces
        
        menor <- j
        
      finsi
      
      temp <- vector[menor]
      vector[menor] <- vector[i]
      vector[i] <- temp
      
    FinPara
    
  FinPara
Finproceso