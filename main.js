// DESARROLLO DE PROBLEMAS
// 1. Mensaje oculto

function getMessage(text) {
  if (text.trim() === "") {
    return "";
  }

  let arrayOfText = text.trim().split(" ");
  let result = "";

  for (let i = 0; i < arrayOfText.length; i++) {
    result += arrayOfText[i][0];
  }

  return result;
}

// a.
let text = "compete online design event rating";
console.log(getMessage(text)); // "coder"
// b.
text = " c o d e r ";
console.log(getMessage(text)); // "coder"
// c.
text = " ";
console.log(getMessage(text), getMessage(text).length); // "" (string vacío con un espacio)

// 2. Encriptación
/* La función "encriptar" elimina los caracteres repetidos dentro de una palabra (string) */

function encriptar(texto) {
  let resultado = "";

  texto.split("").forEach((elemento, indice, array) => {
    if (array.indexOf(elemento) === array.lastIndexOf(elemento)) {
      resultado += elemento;
    }
  });

  return resultado;
}
// a.
let texto = "atención";
console.log("String sin caracteres repetidos: " + encriptar(texto));
// b.
texto = "contable";
console.log("String sin caracteres repetidos: " + encriptar(texto));
// c.
texto = "casa";
console.log("String sin caracteres repetidos: " + encriptar(texto));

// 3. Línea de Números

function getLeast(line, givenNumber) {
  // Convertiete el String en un array de números enteros
  const numbers = line.split(" ").map(Number);

  let minimumNumber = null;

  // Encuentra el primer número que es estrictamente mayor que givenNumber
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > givenNumber) {
      minimumNumber = numbers[i];
      break;
    }
  }

  // Si no se encontró número mínimo, retornar -1
  if (minimumNumber === null) {
    return -1;
  }

  // Compara si el minimumNumber realmente es el mínimo
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > givenNumber && numbers[i] < minimumNumber) {
      minimumNumber = numbers[i];
    }
  }

  return minimumNumber;
}

// a.
let line = "1 2 3 4 5";
let givenNumber = 2;
console.log(getLeast(line, givenNumber)); // 3
// b.
line = "120 450 780";
givenNumber = 1000;
console.log(getLeast(line, givenNumber)); // -1
// c.
line = " 45 253 645 400 676 567 ";
givenNumber = 1;
console.log(getLeast(line, givenNumber)); // 45
// d.
line = " 45 253 645 400 676 567 ";
givenNumber = 400;
console.log(getLeast(line, givenNumber)); // 567
// e.
line = " 568 769 436 432 457 563 567 311 34 3 2 9";
givenNumber = 460;
console.log(getLeast(line, givenNumber)); // 563

// 4. Percentil

function fractile(x, p) {
  let n = x.length;
  let y = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let currentCount = 0;
    for (let j = 0; j < n; j++) {
      if (x[j] <= x[i]) {
        currentCount++;
      }
    }
    if ((currentCount / n) * 100 >= p && x[i] < y) {
      let count = 0;
      y = x[i];
      count = currentCount;
    }
  }

  return y;
}

// En estos argumentos convertí los objetos {} en arrays [] ya que al poner los números dentro de un objeto {} sin nombre me daba error. Igualmente no habría mucha diferencia ya que los objetos también son arrays con diferente sintaxis.
// a.
let x = [-3, -5, 2, 1];
let p = 50;
let y = fractile(x, p);
console.log(y); // y = -3
// b.
x = [7, 9, 2, 10, 6];
p = 50;
y = fractile(x, p);
console.log(y); // y = 2

// c.
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
p = 39;
y = fractile(x, p);
console.log(y); // y = 4

// d.
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 7, 9, 5, 43, 124, 94];
p = 0;
y = fractile(x, p);
console.log(y); // y = 1

// e.
x = [1];
p = 100;
y = fractile(x, p);
console.log(y); // y = 1
