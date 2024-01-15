function exibirValor() {
  var valorDigitado = document.getElementById("num").value

  // Verifica se o valor é nulo, vazio ou contém apenas espaços em branco
  if (valorDigitado === null || valorDigitado.trim() === "") {
    alert("Você não digitou nada. Por favor, tente novamente.")
  } else {
    alert("Você digitou: " + valorDigitado)
  }
}
