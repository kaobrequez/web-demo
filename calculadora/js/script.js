function calcular() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operacion').value;
  const resDiv = document.getElementById('resultado');

  if (isNaN(n1) || isNaN(n2)) {
    resDiv.innerText = "Ingresa ambos números";
    return;
  }

  let res;
  if (op === '+') res = n1 + n2;
  else if (op === '-') res = n1 - n2;
  else if (op === '*') res = n1 * n2;
  else if (op === '/') res = n2 !== 0 ? n1 / n2 : "Error (división por 0)";

  resDiv.innerText = "Resultado: " + res;
}