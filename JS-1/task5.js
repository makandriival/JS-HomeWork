// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы 
// в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к
//  примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно 
// используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'. 
// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 
// 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка 
// - 130 кредитов

let country = prompt ('Enter your country:', 'YourCountry');

let countrylow = country.toLowerCase();

switch (countrylow) {
    case 'china': alert ('delivery to china will be 150 credits');
        
        break;
        case 'chile': alert ('delivery to Chile will be 250 credits');
        
        break;
        case 'australia': alert ('delivery to Australia will be 165 credits');
        
        break;
        case 'india': alert ('delivery to India will be 90 credits');
        
        break;
        case 'jamaica': alert ('delivery to Jamaica will be 130 credits');
        
        break;

    default: alert ('Sorry! There is no delivery to your country!');
        break;
}