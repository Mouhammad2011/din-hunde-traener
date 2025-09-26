function showScreen(idToShow) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(idToShow).classList.remove('hidden');
}

function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

function completeSignup() {
  const name = document.getElementById('dogName').value.trim();
  const age = document.getElementById('dogAge').value.trim();
  const nick = document.getElementById('dogNick').value.trim();
  const slider = document.getElementById('paySlider').value;

  if (!name || !age || !nick || slider < 100) {
    alert("Udfyld alle felter og skub slideren helt til højre for at betale.");
    return;
  }

  const dogData = { name, age, nick };
  localStorage.setItem('dogData', JSON.stringify(dogData));
  localStorage.setItem('userName', name);

  showScreen('mainApp');
  loadDogData();
}

function login() {
  const name = document.getElementById('loginName').value.trim();
  const savedName = localStorage.getItem('userName');

  if (name === savedName) {
    showScreen('mainApp');
    loadDogData();
  } else {
    alert("Navnet findes ikke. Prøv igen eller opret ny bruger.");
  }
}

function loadDogData() {
  const dogData = JSON.parse(localStorage.getItem('dogData'));
  if (!dogData) return;

  document.getElementById('userNameDisplay').textContent = dogData.name;
  document.getElementById('pasName').textContent = dogData.name;
  document.getElementById('pasAge').textContent = dogData.age;
  document.getElementById('pasNick').textContent = dogData.nick;

  switchTab('kampklar');
}
