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

// Об'єкт профілю
const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

// Виведення інформації на екран і в консоль
output(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
output(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
output(profile.getInfo()); // "Marco has 320 active hours!"
