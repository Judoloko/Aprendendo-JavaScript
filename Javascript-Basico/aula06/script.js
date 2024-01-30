/*

string
number
boolean 
array
object
undefined
null

*/


//string
let nome = 'Daniel'; 
console.log(nome);

// String - concatenada
let sobrenome = 'Junior';
// console.log(nome + " " + sobrenome);

//string literal
console.log(`${nome} ${sobrenome}`);


// Number
let idade = 24;
console.log(idade);
console.log(idade + 2);

// number - float
let porcentagem = 10.2;
console.log(porcentagem + '%');

// boolean (true ou false)
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);


// array
let habilidades = ['Javascript', 'PHP', 'Python'];
console.log(habilidades);
console.log(habilidades.length); //consutando quantos item tem dentro do array
console.log(habilidades[2]);


// object
let pessoa = {
  nome: 'Dedé',
  sobrenome: 'Lindo',
  idade: 25,
  habilidades: ['c++', 'c#', 'python']
}
console.log(pessoa.nome);
console.log(pessoa.habilidades[0]);


// undefined
let endereco
console.log(endereco);

// null
let cidade = null;
console.log(cidade);