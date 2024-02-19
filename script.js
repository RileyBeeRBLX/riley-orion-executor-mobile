const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value.trim();
  
  if (userMessage !== '') {
    appendMessage('You', userMessage);
    // Call function to generate bot response
    const botResponse = generateBotResponse(userMessage);
    appendMessage('Bot', botResponse);
    userInput.value = '';
  }
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  // Automatically scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
  // Basic example of bot response generation
  // You can replace this with more sophisticated logic
  
  if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
    return `Hello! How can I assist you with coding today?`;
  } else if (userMessage.toLowerCase().includes('generate script')) {
    return `Sure! What kind of script are you looking to generate?`;
  } else if (userMessage.toLowerCase().includes('generate code')) {
    return `Of course! What programming language or task do you need code for?`;
  } else if (userMessage.toLowerCase().includes('programming')) {
    return `Programming is my forte! What language or problem are you tackling?`;
  } else {
    return `I'm here to help with coding, scripting, and programming. How can I assist you today?`;
  }
}
