function calculation() {
  var valorA = parseInt(document.querySelector("#valor1").value)
  var valorB = parseInt(document.querySelector("#valor2").value)

  var selectOperation = document.querySelector(
    'input[name="operation"]:checked'
  ).value
  var nomeOperacao, resultado

  if (!isNaN(valorA) && !isNaN(valorB)) {
    if (selectOperation === "adicao") {
      nomeOperacao = "Adição"
      resultado = valorA + valorB
    } else if (selectOperation === "subtracao") {
      nomeOperacao = "Subtração"
      resultado = Math.abs(valorA - valorB)
    } else if (selectOperation === "multiplicacao") {
      nomeOperacao = "Multiplicação"
      resultado = valorA * valorB
    } else {
      nomeOperacao = "Divisão"
      resultado = valorA / valorB
    }
    alert(nomeOperacao + ": " + resultado)
  } else {
    alert("Por favor, insira valores numéricos para ambos os campos.")
  }
}
