// Задача 1: Работа с уникальными символами
// Цель: Создайте несколько символов с одинаковым описанием и проверьте их уникальность.

//     Шаги:
// Создайте три символа с описанием "test".
// Сравните их друг с другом и выведите результат сравнения.

let symbol1 = Symbol('1');
let symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false


// Задача 2: Использование символов в объектах
// Цель: Добавить символы как свойства в объект и демонстрировать их "скрытый" характер.

// Шаги:
// Создайте объект user с некоторыми базовыми свойствами, такими как name.
// Добавьте свойство, используя символ, например, символ для "user ID".
// Попробуйте перебрать объект с помощью for...in и убедитесь, что символьное свойство не выводится.
// Доступите к свойству с символом напрямую и выведите его.
console.log('******************************')

const user = {
    name: 'Kris',
    age: '20',
    [Symbol('user ID')]: "#1234",
}

for (const key in user) {
    console.log(key);
}


// Задача 3: Глобальные символы
// Цель: Использование глобального реестра символов для создания и доступа к символам.

// Шаги:
// Создайте глобальный символ Symbol.for("app_id") и присвойте его переменной.
// Попытайтесь получить доступ к этому же символу из другого места в коде.
// Сравните обе переменные, чтобы убедиться, что они ссылкаются на один и тот же объект.
// Используйте Symbol.keyFor для получения описания символа.
console.log('******************************')

const sym = Symbol.for("#194782");
console.log(sym.key);


// Задача 4: Символы и методы объекта
// Цель: Добавьте к объекту метод, используя символ, и продемонстрируйте, как это может служить для "приватных" методов.

// Шаги:
// Создайте символ для метода объекта.
// Добавьте метод в объект, используя этот символ.
// Вызовите метод, используя символьный ключ.
// Проверьте, не видны ли методы при обычном переборе свойств объекта.
console.log('******************************')
let objSym = Symbol('some info');
const obj = {
    name: 'Alia',
    [objSym]: function () {
        console.log('Hidden function');
    },
}
obj[objSym]();
for (const key in obj) {
    console.log(key);
}