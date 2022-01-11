// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;
class Count {
    increment () {
        return counterValue = counterValue + 1;
    };
    decrement () {
        return counterValue = counterValue - 1;
    };
};
let counter = new Count();

let incButton = document.querySelector('.inc');
let decButton = document.querySelector('.dec');
let countDisplay = document.querySelector('#value');


incButton.addEventListener ( 'click', ()=>{
    counter.increment();
    countDisplay.textContent = counterValue;
});
decButton.addEventListener ( 'click', ()=>{
    counter.decrement();
    countDisplay.textContent = counterValue;
});
