  let operand = prompt("Please Enter operator you want to perform \n eg. +,-,/,*");
  let num1 = prompt("Please Enter 1st Number");
  let result;
  if (isNaN(num1)){
   alert("Please enter a valid Number");
    throw new Error();  
  }
  let num2 = prompt("Please 2nd Number\n" + num1 + operand);
  if (isNaN(num2)){
    alert("Please enter a valid Number");
    throw new Error();  
   }
       num1 = parseInt(num1);
       num2 = parseInt(num2);
    switch(operand) {
        case '+':
            result = num1 + num2;
            alert("The Result is " + result);
            break;
       
        case '-':
          result = num1 - num2;
          alert("The Result is " + result);
          break;
        
        case '*':
            result = num1 * num2;
            alert("The Result is " + result);
            break;
       
        case '/':
          result = num1 / num2;
          alert("The Result is " + result);
          break;
        
        default:
          alert("The operator is invalid");
    }
    
    