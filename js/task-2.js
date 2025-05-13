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

// Функція для обчислення середньої кількості калорій
function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  const totalCalories = days.reduce((sum, day) => sum + day.calories, 0);
  return totalCalories / days.length;
}

// Виведення результатів
output(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

output(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

output(
  calcAverageCalories([])
); // 0
