function showDay(dayId) {
  document.querySelectorAll('.calendar-day').forEach(day => {
    day.classList.remove('active');
  });
  document.getElementById(dayId).classList.add('active');
}

function toggleTalk(talkElement) {
  talkElement.classList.toggle('active');
}

function handleSubmit(event) {
  event.preventDefault();
  alert('¡Inscripción enviada! Recibirás un correo con los siguientes pasos.');
}
