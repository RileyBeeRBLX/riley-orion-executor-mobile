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
  const greetings = ['Hello!', 'Hi there!', 'Hey!', 'Nice to meet you!'];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  return `${randomGreeting} How can I assist you?`;
}
