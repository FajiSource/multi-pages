import { get_message } from './data.js'



const messagesBox = document.getElementById("messages");

get_message().forEach(message => {
    let container = document.createElement("div");
    container.classList.add("message");
    container.innerHTML = `
             <div class="message">
                <h3>Message from anonymous</h3>
                <p>${message}</p>
            </div>
        `;
    messagesBox.appendChild(container);
});

