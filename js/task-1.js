// Функція для виведення результату на екран
function displayResult(message) {
  const resultDiv = document.getElementById('results');
  const p = document.createElement('p');
  p.textContent = message;
  resultDiv.appendChild(p);
}

// Об'єднана функція для виводу і в консоль, і на екран
function output(message) {
  console.log(message);  // Виводимо в консоль
  displayResult(message); // Виводимо на екран
}

// Функція для перевірки, чи вистачає місця в контейнері
function isEnoughCapacity(products, containerSize) {
  const totalQuantity = Object.values(products).reduce((sum, quantity) => sum + quantity, 0);
  return totalQuantity <= containerSize;
}

// Виведення результатів
output(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

output(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

output(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

output(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
