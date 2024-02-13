let inputNota1 = prompt("Digite a priemira nota:");
let inputNota2 = prompt("Digite a segunda nota:");

let nota1 = parseInt(inputNota1);
let nota2 = parseInt(inputNota2);

let mediaMinima = 7;

let media = (nota1 + nota2) / 2;


if (media >= mediaMinima) {
  document.write(`Ok passou de ano, sua média foi: ${media}`)
} else if ( media < mediaMinima) {
  document.write(`Ops não passou de ano, sua media foi ${media}`)
}

document.write("<br>")

if (media >= mediaMinima && media === 10) {
  document.write("NOSSA! Você foi muito bem, continue assim!")
} else if (media >= mediaMinima && media === 9) {
  document.write("Você mandou bem! Vamos tentar chegar na média 10? ")
} else if (media >= mediaMinima && media === 8) {
  document.write("Você foi bem! Vamos tentar chegar a na média 9 ")
}  else if (media >= mediaMinima && media === 8) {
  document.write("Você foi bem! Vamos tentar chegar a na média 9 ")
} else if (media < mediaMinima && media === 6) {
  document.write("Deu ruim em! Vamos tentar passar de ano na proxima ")
} else if (media < mediaMinima && media === 5) {
  document.write("Deu ruim em! Vamos tentar passar de ano no ano que vem ")
} else if (media < mediaMinima && (media === 4 || media === 3 || media === 2 || media === 1 || media === 0)) {
  document.write("Você é muito burro por isso que vai fazer tudo de novo, a gente se ve o que vem seu burro")
}
