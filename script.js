const speech = new SpeechSynthesisUtterance();

function speak() {

const textToSpeak = document.getElementById("textToSpeak").value;
  
speech.text = textToSpeak;
speech.rate = 1; // Adjust speech rate if needed (0.1 - 10)
speech.pitch = 1; // Adjust pitch if needed (0 - 2)
speech.volume = 1; // Adjust volume if needed (0 - 1)

window.speechSynthesis.speak(speech);
}

document.getElementById("speakButton").addEventListener("click", speak);
