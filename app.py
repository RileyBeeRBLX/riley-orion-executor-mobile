from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/api/chatbot', methods=['POST'])
def chatbot_api():
    try:
        data = request.json
        user_input = data['user_input']

        # Customize the server-side logic based on user input
        if user_input.lower() == 'hello':
            prompt = "Hello, how can I help you today?"
        else:
            prompt = f"You: {user_input}\nChatBot AI:"

        response = generate_response(prompt)
        return jsonify({'response': response})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

def generate_response(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=150
    )
    return response.choices[0].text.strip()

if __name__ == '__main__':
    app.run(debug=True)
  
