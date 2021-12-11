// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция 
// возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть 
// в произвольном регистре.



const checkForSpam = function(message) {
 
  let msgArr = (message.toLowerCase().split(' ')); 

  for (let msg of msgArr) {
      if (msg === 'spam' || msg==='sale') {
          return true;
      } else {
          return false;
      }
  };

  message('Get best sale offers now!');
  ;

