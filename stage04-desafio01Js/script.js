alert("Vamos calcular!")
let option
let result
let operator


while(option != "1") {

let number1 = Number(prompt("Digite o primeiro número:"))
operator = prompt("Digite o operador:")
let number2 = Number(prompt("Digite o segundo número:"))
  
  if(operator == "+") {

  result = number1 + number2
} else if(operator == "-") {
  result = number1 - number2
} else if(operator == "/") {
  result = number1 / number2
} else if(operator == "*") {
  result = number1 * number2
} else if(operator == "%") {
  result = number1 % number2
} else {
 operator = prompt("Operador inválido, tente novamente!")
 result = Number (number1 + operator + number2)
 
}
alert(result)
option = prompt("Digite 1 para encerrar ou qualquer tecla para continuar.")
} 





