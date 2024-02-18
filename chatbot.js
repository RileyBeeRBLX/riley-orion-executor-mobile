// chatbot.js

// Load environment variables from .env file
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY; // Get your API key from environment variables

// Example user input (you can replace this with actual user input)
const userInput = "Tell me a joke!";

// Make an API request to OpenAI
async function getChatbotResponse(input) {
    const fetch = require('node-fetch');

    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
    const prompt = input;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 50, // Adjust as needed
        }),
    });

    const data = await response.json();
    return data.choices[0].text;
}

// Get the chatbot response
getChatbotResponse(userInput)
    .then((chatbotResponse) => {
        console.log(`Chatbot says: ${chatbotResponse}`);
    })
    .catch((error) => {
        console.error('Error fetching chatbot response:', error);
    });
