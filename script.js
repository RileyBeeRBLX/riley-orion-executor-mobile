const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value.trim();
    
    if (userMessage !== '') {
        appendMessage('You', userMessage);
        // Call function to send user message to server
        // and receive response from the chatbot AI
        sendToServer(userMessage);
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

document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
