async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;
    if (!message) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p><b>You:</b> " + message + "</p>";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        chatBox.innerHTML += "<p><b>Halobot:</b> " + data.response + "</p>";
    } catch (err) {
        chatBox.innerHTML += "<p style='color:red;'><b>Error:</b> Failed to connect.</p>";
    }

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
