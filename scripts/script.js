const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('mousedown', playSound);
});
document.addEventListener('keydown', playSound);
const mode = document.querySelector('.mode');
mode.addEventListener('click', changeMode);

function playSound(e) {
  if (e.type === 'mousedown' && e.which !== 1) return;

  const keyCode = e.type === 'mousedown' ? e.currentTarget.dataset.key : e.keyCode;
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!key) return;

  key.classList.add('playing');

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function changeMode(e) {
  document.body.classList.toggle('light');
}
