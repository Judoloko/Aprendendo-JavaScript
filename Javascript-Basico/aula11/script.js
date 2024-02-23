
let dayWeek = new Date().getDay(); // pega o dia

let nameDay

switch(dayWeek) {
  case 0:
    nameDay = "Domingo";
    break;
  case 1:
    nameDay = "Segunda-feira";
    break;
  case 2:
    nameDay = "Terça-feira";
    break;
  case 3:
    nameDay = "Quarta-feira";
    break;
  case 4:
    nameDay = "Quinta-feira";
    break;
  case 5:
    nameDay = "Sexta-feira";
    break;
  case 6:
    nameDay = "Sábado";
    break;
}

document.write(`The day of the week is ${nameDay}`)