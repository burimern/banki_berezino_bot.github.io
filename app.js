let items = [];

// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Обновление основной кнопки
function updateMainButton() {
    if (items.length === 0) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`Вы выбрали товар(ы): ${items.join(", ")}`);
        tg.MainButton.show();
    }
}

// Переход к категории товаров
function redirectToCategory(category) {
    window.location.href = `${category}.html`;
}

// Функция для добавления товара
function addItem(item) {
    items.push(item);
    localStorage.setItem('selectedItems', JSON.stringify(items));
    updateMainButton();
    alert(`${item} добавлен в заказ`);
}

// Отправка заказа
tg.MainButton.onClick(() => {
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    if (selectedItems.length === 0) {
        alert('Вы не выбрали ни одного товара');
        return;
    }

    const message = `Ваш заказ: ${selectedItems.join(', ')}`;

    // Отправка данных в Telegram бота
    fetch('https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '<RECIPIENT_CHAT_ID>',
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Заказ отправлен успешно');
            localStorage.removeItem('selectedItems');
            items = [];
            updateMainButton();
        } else {
            alert('Ошибка при отправке заказа');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке заказа');
    });
});

// Обновление кнопки при загрузке страницы
window.addEventListener('load', () => {
    items = JSON.parse(localStorage.getItem('selectedItems')) || [];
    updateMainButton();
});






