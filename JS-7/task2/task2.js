// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const ingredients = [
      'Картошка',
      'Грибы',
      'Чеснок',
      'Помидоры',
      'Зелень',
      'Приправы',
    ];

    let ulRef = document.querySelector('#ingredients');

    function createLi (ing) {
        let li = document.createElement('li');
        li.textContent = ing;
        li.classList.add('list_item');
        return li;
    };

    let theList = ingredients.map((li)=> {
        return createLi(li)
    });

    // console.log(theList);

    ulRef.append(...theList);