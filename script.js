// script.js
document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    addMessage(userInput, "user");
    document.getElementById("userInput").value = "";

    // Simulate AI response
    setTimeout(() => {
        const aiResponse = getAIResponse(userInput);
        addMessage(aiResponse, "ai");
    }, 500);
});

function addMessage(text, sender) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}

function getAIResponse(question) {
    // Basic AI-like logic
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bunch of code, but I'm here to help!",
        "what is your name": "I'm your friendly AI assistant.",
        "bye": "Goodbye! Have a great day!"
    };

    const lowerQuestion = question.toLowerCase();
    return responses[lowerQuestion] || "Sorry, I don't have an answer for that. Try asking something else!";
}
