let messages = [
    "Did you know? Drinking water can improve your skin health and help maintain body temperature.",
    "Take breaks! Sitting for long periods can negatively affect your posture and circulation."
];

const loadStorage = () => {

    const messagesData = JSON.parse(localStorage.getItem("messages") || "[]");
    if (messagesData.length <= 0) {
        localStorage.setItem("messages", JSON.stringify(messages));
    }
}

const get_message = () => {
    loadStorage();
    const messagesData = JSON.parse(localStorage.getItem("messages") || "[]");
    console.log("messages: ", messagesData);
    return messagesData;
};

const send_message = (message) => {
    loadStorage();
    const messagesData = JSON.parse(localStorage.getItem("messages") || "[]");

    messagesData.push(message);
    messagesData.forEach(elem => {
        console.log(elem);
    })
    localStorage.setItem("messages", JSON.stringify(messagesData));
    return "Message sent";
};
export { get_message, send_message };