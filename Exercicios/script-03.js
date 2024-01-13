function somaMedia() {
  var idade1 = parseInt(document.querySelector("#idade1").value)
  var idade2 = parseInt(document.querySelector("#idade2").value)

  // Verificar se ambos os campos são valores numéricos
  if (!isNaN(idade1) && !isNaN(idade2)) {
    console.log("1° Idade: " + idade1)
    console.log("2° Idade: " + idade2)

    var soma = idade1 + idade2
    var media = soma / 2

    console.log("Soma das idades: " + soma)
    console.log("Média das idades: " + media)
    alert(
      "Clique com o botão direito do mouse ou aperte F12 vá em console para obter a resposta"
    )
  } else {
    alert("Por favor, insira valores numéricos para ambos os campos.")
  }
}
