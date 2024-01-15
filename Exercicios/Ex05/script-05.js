function calculo() {
  var temp = document.querySelector('#temperatura').value;
  var resultado = (temp * 1.8) + 32;

  if (!isNaN(temp)) {
    alert('Fahrenheit: ' + resultado);
  } else {
    alert("Por favor, insira um valor.")
  }
}