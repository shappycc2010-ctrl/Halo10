from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"response": "I didn’t understand that."})
    return jsonify({"response": f"Halobot says: {user_message}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
