// // Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.




const findLongestWord = function(string) {
 let str = string.split(' ');
let longestWord = 0
let theWord = ('');
for (let st of str ) {
    if (st.length > longestWord){
        longestWord = st.length;
        theWord = st;
    }
}

 console.log(theWord + ' - ' + longestWord)
};


findLongestWord ('May the force be with you ');




// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// // console.log(findLongestWord('Google do a roll')); // 'Google'

// // console.log(findLongestWord('May the force be with you')); // 'force'

