// index.ts
const url = 'https://api.together.xyz/v1/chat/completions';
const apiKey = process.env.TOGETHER_API_KEY;

const headers = new Headers({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${apiKey}`,
});

const data = {
  model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  max_tokens: 1024,
  messages: [
    {
      role: 'system',
      content: 'You are an AI assistant',
    },
    {
      role: 'user',
      content: 'Who won the world series in 2020?',
    },
  ],
};

const options = {
  method: 'POST',
  headers,
  body: JSON.stringify(data),
};

fetch(url, options)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
