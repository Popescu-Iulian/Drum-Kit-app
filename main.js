function keyPress(event) {
	const AUDIO = document.querySelector(`audio[data-key="${event.keyCode}"]`);

	if (!AUDIO) return;

	// play the sound from the start
	AUDIO.currentTime = 0;

	AUDIO.play();
}
