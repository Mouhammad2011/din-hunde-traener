// Skift mellem tabs
function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

// Vis signup-skærm
function showSignup() {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('signupScreen').classList.remove('hidden');
}

// Fuldfør signup og fake betaling
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

  document.getElementById('signupScreen').classList.add('hidden');
  showMainApp();
}

// Login med navn fra LocalStorage
function login() {
  const name = document.getElementById('loginName').value.trim();
  const savedName = localStorage.getItem('userName');

  if (name === savedName) {
    document.getElementById('authScreen').classList.add('hidden');
    showMainApp();
  } else {
    alert("Navnet findes ikke. Prøv igen eller opret ny bruger.");
  }
}

// Vis hovedappen og hundens info
function showMainApp() {
  const dogData = JSON.parse(localStorage.getItem('dogData'));
  if (!dogData) return;

  document.getElementById('userNameDisplay').textContent = dogData.name;
  document.getElementById('pasName').textContent = dogData.name;
  document.getElementById('pasAge').textContent = dogData.age;
  document.getElementById('pasNick').textContent = dogData.nick;

  document.getElementById('mainApp').classList.remove('hidden');
  switchTab('kampklar');
}
