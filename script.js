
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");
const chatPopup = document.getElementById("chat-popup");
const chatIcon = document.getElementById("chat-icon");

chatIcon.addEventListener("click", () => {
    chatPopup.style.display = chatPopup.style.display === "none" || chatPopup.style.display === "" ? "flex" : "none";
});

sendButton.addEventListener("click", () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessage("user", userMessage);
        chatInput.value = "";
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage("bot", botResponse);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);
    }
});