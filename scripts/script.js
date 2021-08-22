const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);

function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return;

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
