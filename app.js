let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");

function toggleItem(button, itemNumber) {
    if (items.includes(itemNumber)) {
        items = items.filter(item => item !== itemNumber);
        button.classList.remove("selected"); // Необязательно: добавьте класс, чтобы указать, что кнопка выбрана.
    } else {
        items.push(itemNumber);
        button.classList.add("selected"); // Необязательно: добавьте класс, чтобы указать, что кнопка выбрана.
    }
    updateMainButton();
}

function updateMainButton() {
    if (items.length === 0) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`Вы выбрали товар(ы): ${items.join(", ")}`);
        tg.MainButton.show();
    }
}

btn1.addEventListener("click", function() {
    toggleItem(btn1, "1");
});

btn2.addEventListener("click", function() {
    toggleItem(btn2, "2");
});

btn3.addEventListener("click", function() {
    toggleItem(btn3, "3");
});

btn4.addEventListener("click", function() {
    toggleItem(btn4, "4");
});

btn5.addEventListener("click", function() {
    toggleItem(btn5, "5");
});

btn6.addEventListener("click", function() {
    toggleItem(btn6, "6");
});

btn7.addEventListener("click", function() {
    toggleItem(btn7, "7");
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(items.join(","));
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);







