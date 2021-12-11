// ; Задание 1
// ; Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого 
// ; элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// ; Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
// ; с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// ; const logItems = function(array) {
;   // твой код
// ; };
; /*
;  * Вызовы функции для проверки работоспособности твоей реализации.
;  */
// ; logItems (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])


// ; logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


let nums = ([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
let fruits =  (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])



const logItems = function (array) {
    for ( let item of array) {
    let ind = array.indexOf(item) + 1;

    console.log (ind +' - '+ item);
    }
}
logItems(fruits)

logItems(nums)