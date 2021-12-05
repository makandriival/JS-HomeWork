// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока 
// посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается до тех пор,
//  пока пользователь не нажмет кнопку Cancel в prompt. После того как пользователь прекратил
//   ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'. 
//   bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
//   символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 
//   'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей 
//   сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
// let input; 
// let total = 0;

// ======================================
// let sum = 0;

// let input = prompt ('Enter your number!', '0').split (",");
// let inputNum = parseInt (input);
// // console.log (typeof inputNum);
// // console.log (inputNum);
// if (input == null) {alert('input is not a number!')};

// // do { 
// // sum = sum + inputNum ;
// //   }    while (input !== null);

// // alert ('the sum of your numbers is' + ' ' + sum);

// ====================

function total() {

    let numbers = [];
 
    while (true) {
 
       let value = prompt("A number please?", 0);
 
       if (value === null) break;
       
       numbers.push(+value);
    }
 
    let sum = 0;
    for (let number of numbers) {
       sum += number;
    }
    return sum ;
 }
 
 alert('The sum of your numbers is ' + total());