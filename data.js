let messages = [
    "Did you know? Drinking water can improve your skin health and help maintain body temperature.",
    "Take breaks! Sitting for long periods can negatively affect your posture and circulation."
];
let accounts = [];

const loadStorage = () => {
    if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify(messages));
    }
    if (!localStorage.getItem("accounts")) {
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }
};

const get_message = () => {
    loadStorage();
    return JSON.parse(localStorage.getItem("messages") || "[]");
};

const send_message = (message) => {
    loadStorage();
    const messagesData = JSON.parse(localStorage.getItem("messages") || "[]");
    messagesData.push(message);
    localStorage.setItem("messages", JSON.stringify(messagesData));
    return "Message sent";
};

const sign_up = (fullname, email, password) => {
    loadStorage();
    const accountsData = JSON.parse(localStorage.getItem("accounts") || "[]");

    if (accountsData.some(user => user.email === email)) {
        return "Email already registered.";
    }

    const user = { fullname, email, password };
    accountsData.push(user);
    localStorage.setItem("accounts", JSON.stringify(accountsData));
    return "Account successfully created.";
};

const sign_in = (email, password) => {
    loadStorage();
    const accountsData = JSON.parse(localStorage.getItem("accounts") || "[]");

    const user = accountsData.find(data => data.email === email && data.password === password);
    if (user) {
        const userData = { email: user.email, fullname: user.fullname };
        localStorage.setItem("user", JSON.stringify(userData));
        document.location.href = "./index.html";
        return userData;
    }
    return false;
};

const get_user = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user ? user : null;
};

const logout = () => {
    localStorage.setItem("user", null);
    document.location.href = "./signin.html";    
}

export { get_message,logout, send_message, sign_up, sign_in, get_user };

