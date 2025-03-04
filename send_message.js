import { send_message } from "./data.js";

const messageBtn = document.getElementById("messageBtn");
const messageVal = document.getElementById("message-val");

messageBtn.onclick = (e) => {
    send_message(messageVal.value);
    alert("message sent");
    document.location.href = "index.html";
};  