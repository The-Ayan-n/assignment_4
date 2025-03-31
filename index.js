function calculateBMI(weight, height) {
    return weight / (height * height);
}

function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}

let age = 25;
const name = "John Doe";

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

function showAlert() {
    alert("Form submitted successfully!");
}

function confirmDeletion() {
    return confirm("Are you sure you want to delete this item?");
}

function askUserName() {
    let userName = prompt("Enter your name:");
    document.getElementById("username").innerText = userName;
}

document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("text").innerText = "Text changed!";
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});

function addItem() {
    let item = document.createElement("li");
    item.innerText = document.getElementById("newItem").value;
    document.getElementById("itemList").appendChild(item);
}


function validateForm() {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return false;
    }
    if (!passwordPattern.test(password)) {
        alert("Password must contain uppercase, lowercase, numbers, and special characters.");
        return false;
    }
    return true;
}

document.getElementById("showDate").innerText = new Date().toLocaleString();

console.log("Random number: " + Math.random());

function fetchWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
    .then(response => response.json())
    .then(data => document.getElementById("weather").innerText = data.weather[0].description)
    .catch(error => console.error("Error fetching weather:", error));
}


let toDoList = [];
function addToDo() {
    let task = document.getElementById("task").value;
    toDoList.push({ task: task, completed: false });
    displayToDoList();
}
function displayToDoList() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    toDoList.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerText = item.task;
        list.appendChild(li);
    });
}

function chatbotResponse() {
    let userInput = document.getElementById("chatInput").value.toLowerCase();
    let response = "I don't understand.";
    if (userInput.includes("hello")) {
        response = "Hello! How can I help you today?";
    } else if (userInput.includes("weather")) {
        response = "Try checking the weather using our weather feature!";
    }
    document.getElementById("chatResponse").innerText = response;
}