function printFibonacci(n) {
    let fibArr = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  
    document.querySelector(".fibo").innerHTML=fibArr.join(', ');
  }
  
  printFibonacci(10);
  
