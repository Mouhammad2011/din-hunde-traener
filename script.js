const registerBtn = document.getElementById('registerBtn');
const dogNameInput = document.getElementById('dogName');
const trainingTypeSelect = document.getElementById('trainingType');
const trainingOverview = document.getElementById('trainingOverview');
const eventList = document.getElementById('eventList');

// Dummy data for training and events
const trainings = [
  { type: 'Hvalpetræning', time: 'Mandag kl. 17:00' },
  { type: 'Agility', time: 'Onsdag kl. 18:30' },
  { type: 'Lydighed', time: 'Fredag kl. 16:00' }
];

const events = [
  { name: 'Hundens Dag', date: '12. oktober' },
  { name: 'Agility Cup', date: '26. oktober' },
  { name: 'Julehundeparade', date: '15. december' }
];

// Load training list
trainings.forEach(training => {
  const li = document.createElement('li');
  li.textContent = `${training.type} – ${training.time}`;
  trainingOverview.appendChild(li);
});

// Load event list
events.forEach(event => {
  const li = document.createElement('li');
  li.textContent = `${event.name} – ${event.date}`;
  eventList.appendChild(li);
});

// Show message box
function showMessage(text, type = 'error') {
  const msgBox = document.createElement('div');
  msgBox.textContent = text;
  msgBox.className = `message ${type}`;
  document.body.appendChild(msgBox);

  setTimeout(() => {
    msgBox.remove();
  }, 3000);
}

// Handle registration
registerBtn.addEventListener('click', () => {
  const dogName = dogNameInput.value.trim();
  const trainingType = trainingTypeSelect.value;

  if (!dogName || !trainingType) {
    showMessage('Udfyld både hundens navn og træningstype.');
    return;
  }

  showMessage(`${dogName} er tilmeldt ${trainingType}!`, 'success');
  dogNameInput.value = '';
  trainingTypeSelect.value = '';
});
