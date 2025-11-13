// Чекаємо, поки вся HTML-сторінка завантажиться
document.addEventListener("DOMContentLoaded", function() {

    // Знаходимо нашу форму за її ID
    const form = document.getElementById("main-form");
    
    // Знаходимо поле "Назва препарату", яке ми будемо перевіряти
    const productNameInput = document.getElementById("product-name");
    
    // Знаходимо блок, куди ми будемо виводити повідомлення про помилки
    const statusMessage = document.getElementById("form-status-message");

    // Знаходимо поле 'number' та 'output' для розрахунку
    const countInput = document.getElementById("product-count");
    const outputResult = document.getElementById("calc-result");


    // === Завдання 1: "Контроль введення" при відправці ===

    // Додаємо "слухача" на подію "submit" (натискання кнопки відправки)
    form.addEventListener("submit", function(event) {
        
        // 1. ЗАПОБІГАЄМО ВІДПРАВЦІ ФОРМИ НА СЕРВЕР
        // Це виконує вашу умову "без відправки на Web-сервер"
        event.preventDefault();

        // 2. Виконуємо наш "контроль введення"
        const productName = productNameInput.value.trim(); // Беремо текст, прибираємо пробіли
        const minLength = parseInt(productNameInput.getAttribute("minlength"), 10); // Беремо minlength з HTML

        // 3. Перевіряємо
        if (productName === "") {
            // Поле порожнє
            statusMessage.textContent = "ПОМИЛКА: 'Назва препарату' не може бути порожньою.";
            statusMessage.style.color = "red";
            productNameInput.style.borderColor = "red"; // Підсвічуємо поле
        
        } else if (productName.length < minLength) {
            // Довжина менша за minlength
            statusMessage.textContent = `ПОМИЛКА: 'Назва препарату' має містити мінімум ${minLength} символів.`;
            statusMessage.style.color = "red";
            productNameInput.style.borderColor = "red";
        
        } else {
            // Все добре
            statusMessage.textContent = "КОНТРОЛЬ ПРОЙДЕНО! Форма не відправлена (як і планувалося).";
            statusMessage.style.color = "green";
            productNameInput.style.borderColor = "green";
            
            // Можна очистити форму, якщо потрібно
            // form.reset(); 
        }
    });


    // === Завдання 2: Динамічне оновлення <output> ===
    
    // Додаємо "слухача" на зміну поля "Кількість"
    countInput.addEventListener("input", function() {
        const count = parseInt(countInput.value, 10) || 0;
        // Оновлюємо значення в <output> (К-сть * 5)
        outputResult.value = count * 5;
    });

});