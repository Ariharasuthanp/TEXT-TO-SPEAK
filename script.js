const speech = new SpeechSynthesisUtterance();

function speak() {

const textToSpeak = document.getElementById("textToSpeak").value;
  
speech.text = textToSpeak;
speech.rate = 1; 
speech.pitch = 1; 
speech.volume = 1;

window.speechSynthesis.speak(speech);
}

document.getElementById("speakButton").addEventListener("click", speak);
