const counter = (function() {
    let counter = 0;
    return function(value) {
        console.log(counter += value);
    };
})();

counter(3);
counter(5);
counter(228);







function arr() {
    let array = [];
    return function(item) {
        if (!item) {
            array = [];
        } else {
            array.push(item);
        }
        return array;
    }
}

const arr1 = arr();
console.log(arr1(3));
console.log(arr1(5));
console.log(arr1({ name: 'Vasya' }));
console.log(arr1());
console.log(arr1(4));



//2  задание


const studentArr = [{
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];


class Student {
    static array = [];
    constructor(enrollee) {
        Student.array.push(enrollee);
        Student.array.sort(function(a, b) {
            return a - b;
        })
    }
}

for (let studentPayload of studentArr) {
    new Student(studentPayload);
}

console.log(Student.array);