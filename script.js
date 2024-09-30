function chatbot(input) {
  let output = "";
  input = input.toLowerCase();  // Convert input to lowercase for case-insensitive comparison
  
  // Check for different conditions using lowercase strings
  if (input.includes("hello") || input.includes("hi")) {
    output = "Hello, nice to meet you!";
  } else if (input.includes("which file type weguard supports?")) {
    output = "Weguard supports PDFs, DOCs, images, audio, video, and PPTs.";
  } else if (input.includes("grades of redaction")) {
    output = "Grade 1: Basic Security, Grade 2: Medium Security, Grade 3: Advanced Security.";
  } else if (input.includes("pricing")) {
    output = "Grade 1: Free, Grade 2: $99, Grade 3: $299. For more details, visit the pricing section of our website.";
  } else if (input.includes("who are your team members?")) {
    output = "Our team members are: Abhishek Tiwari, Kumud Zimal, Bhoomika Surve, Kunal Ushinkar, Aaditya Sureka, Shreel Thakur.";
  } else {
    output = "Sorry, I don't understand that. Please try something else.";
  }
  
  return output;
}


// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function() {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input (detect 'Enter' key)
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) { // 'Enter' key is pressed
    sendMessage();
  }
});