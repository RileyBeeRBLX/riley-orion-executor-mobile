// Define responses for different types of input
const responses = {
    "hello": "Hello! How can I help you today?",
    "how are you": "I'm just a computer program, but I'm functioning perfectly. How can I assist you?",
    "bye": "Goodbye! Have a great day!",
    "thanks": "You're welcome!",
    "default": "I'm sorry, I didn't understand that."
};

// Function to generate a response based on user input
function generateResponse(input) {
    input = input.toLowerCase();
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return responses["default"];
}

// Function to handle user input
function handleInput() {
    const userInput = document.getElementById('user-input').value;
    const botResponse = generateResponse(userInput);
    displayResponse(botResponse);
}

// Function to display bot response
function displayResponse(response) {
    const chatBox = document.getElementById('chat-box');
    const responseElement = document.createElement('p');
    responseElement.textContent = `Bot: ${response}`;
    chatBox.appendChild(responseElement);
}

// Event listener for user input
document.getElementById('send-button').addEventListener('click', function() {
    handleInput();
});
