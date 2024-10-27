// Create a new SpeechSynthesisUtterance instance
const speech = new SpeechSynthesisUtterance();

// Function to speak the text
function speak() {
// Get the text from the textarea
const textToSpeak = document.getElementById("textToSpeak").value;

// Set the properties for the speech
speech.text = textToSpeak;
speech.rate = 1; // Adjust speech rate if needed (0.1 - 10)
speech.pitch = 1; // Adjust pitch if needed (0 - 2)
speech.volume = 1; // Adjust volume if needed (0 - 1)

// Speak the text
window.speechSynthesis.speak(speech);
}

// Add event listener to the button
document.getElementById("speakButton").addEventListener("click", speak);
