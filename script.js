document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.getElementById("chat-container");
  const chat = document.getElementById("chat");
  const userInput = document.getElementById("user-input");

  function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Display user message in the chat
    chat.innerHTML += `<p>You: ${userMessage}</p>`;
    userInput.value = "";

    // Make a request to your server with the user's message
    fetch("/get_response", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `user_input=${encodeURIComponent(userMessage)}`,
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the bot's response in the chat
        chat.innerHTML += `<p>Bot: ${data.response}</p>`;
      })
      .catch((error) => console.error("Error fetching response:", error));
  }

  // Set up event listener for the "Send" button
  document.getElementById("send-button").addEventListener("click", sendMessage);
});
