let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

let buttons = document.querySelectorAll('.btn');
let timeInput = document.getElementById('time');
let placeInput = document.getElementById('place');

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

buttons.forEach((button, index) => {
    button.addEventListener('click', () => toggleItem(button, (index + 1).toString()));
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let selectedItems = items.join(", ");
    let time = timeInput.value;
    let place = placeInput.value;

    if (!time || !place) {
        alert('Пожалуйста, введите время и место.');
        return;
    }

    let message = `
1. Выбранные товары: ${selectedItems}
2. Время: ${time}
3. Место: ${place}
    `;
    tg.sendData(message.trim());
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);









