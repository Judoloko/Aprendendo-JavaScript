function trocarValores() {
  var a = document.getElementById("num-a").value
  var b = document.getElementById("num-b").value

  // Verificar se ambos os campos foram preenchidos
  if (a !== "" && b !== "") {
    console.log("Variável A: " + a);
    console.log("Variável B: " + b);

    // Trocar os valores de a e b
    var c = b;
    var b = a;
    var a = c;

    console.log("Após a troca:");
    console.log("Variável A: " + a);
    console.log("Variável B: " + b);
    alert("Clique com o botão direito do mouse ou aperte F12 va e, console para obter a resposta"
    );
  } else {
    alert("Por favor, insira valores para ambos os campos.");
  }

  
}
