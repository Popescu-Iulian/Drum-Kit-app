function playSound(event) {
	const AUDIO = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const KEY = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	if (!AUDIO) return;

	// play the sound from the start
	AUDIO.currentTime = 0;

	AUDIO.play();

	KEY.classList.add('playing');
}

function removeTransition(event) {
	// skip function if is not a transform
	if (event.propertyName !== 'transform') return;

	this.classList.remove('playing');
}

const KEYS = document.querySelectorAll('.key');
KEYS.forEach((key) => key.addEventListener('transitionend', removeTransition));
