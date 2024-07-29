let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

let buttons = document.querySelectorAll('.btn');

function toggleItem(button, itemNumber) {
    if (items.includes(itemNumber)) {
        items = items.filter(item => item !== itemNumber);
        button.classList.remove("selected");
    } else {
        items.push(itemNumber);
        button.classList.add("selected");
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

// переходы на страницы
function redirectToHot() {
    window.location.href = 'hot.html' ;
}
function redirectToHotDot(){
    window.location.href = 'hot-dot.html';
}
function redirectToPodonki(){
    window.location.href = 'podonki.html';
}
function redirectToPodonkiLastHap(){
    window.location.href = 'podonki-last-hap.html';
}
function redirectToPodonkixAnarchi(){
    window.location.href = 'podonki-x-anarchi.html';
}
function redirectToRasxodniki(){
    window.location.href = 'rasxodniki.html';
}


buttons.forEach((button, index) => {
    button.addEventListener('click', () => toggleItem(button, (index + 1).toString()));
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(items.join(","));
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);









