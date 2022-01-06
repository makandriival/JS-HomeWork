import users from "/JS-6/users.js";
console.log(users);


// // Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над массивом объектов пользователей из файла users.js.
// // Задание 1
// // Получить массив имен всех пользователей (поле name).


// const getUserNames = users => {
//    let names =  users.map(({name}) => name);
//    console.log('Task1');
//    return names;
// };
// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



// // Задание 2
// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// // 


// const getUsersWithEyeColor = (users, color) => {
//     console.log('Task2');
//     let eyeArr = users.filter((obj) => {
//         return obj.eyeColor === color;
//     });
//     return eyeArr;
//  };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// //


// // Задание 3
// // Получить массив имен пользователей по полу (поле gender).
// // 

// const getUsersWithGender = (users, gender) => {
//     console.log('Task3');
//     let genderArr = users.filter((obj) => {
//         return obj.gender === gender;
//     });
//     return genderArr;

// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]



// // Задание 4
// // Получить массив только неактивных пользователей (поле isActive).


// const getInactiveUsers = users => {
//         console.log('Task4');
//         let activeArr = users.filter((obj) => {
//             return !obj.isActive;
//         });
//         return activeArr;
// };
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



// // Задание 5
// // Получить пользоваля (не массив) по email (поле email, он уникальный).
// // 

// const getUserWithEmail = (users, email) => {
//     console.log('Task5');
    
//     let userToFind = email;
    
//     let theUser = users.find((elem)=>{
//         return elem.email === userToFind;
//     });
//     return theUser;
//  };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}



// // Задание 6
// // Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
// // 
// const getUsersWithAge = (users, min, max) => {
//     console.log('Task6');
//     // console.log(min, max);
//         let ageArr = users.filter((obj) => {
//             return obj.age >= min & obj.age <= max;
//         });
//         return ageArr;
// };
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]




// // Задание 7
// // Получить общую сумму баланса (поле balance) всех пользователей.
// // 

// const calculateTotalBalance = users => {
//     console.log('task7');

//     let bal = users.map ((user)=> user.balance);

//     let total = bal.reduce((acc, elem) => {
//         return acc + elem;
//     })

// return 'total= ' + total;
// };
// console.log(calculateTotalBalance(users)); // 20916



// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
// 

// const getUsersWithFriend = (users, friendName) => {
//     console.log('task8');

//     let ausers = users.filter(({name, friends})=>
//     friends.includes(friendName)); 

//     let fusers = ausers.map((user) => {
//         return user.name;
//     });
    
//     return fusers;

//  };
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)


const getNamesSortedByFriendsCount = users => {
console.log('task9');
    let sortedUsers = users.sort((a,b) => a.friends.length - b.friends.length);
    
    let sortedNames = users.map((user)=>user.name);
return sortedNames;
};



console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть 
// отсортированы в алфавитном порядке.
// 

const getSortedUniqueSkills = users => {
console.log('task10');

let skillArr = users.reduce(((skillArr, {skills}) => skillArr.concat(skills)), []).sort();
let filtArr = [...new Set(skillArr)];
return filtArr;
};
console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// 9:01
// =======================================================================
// Чтобы подлючить отдельно файл с пользователями нужно в каджом файле сверху написать такую штуку
// import friends from "./friends.js";
//  import friends from "путь_к_файлу_friends.js";
// Не заыбвайте что скрипт в html нужно подключать вот так
// <script src="путь_к_скирпту" type="module"></script>