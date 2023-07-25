// Task 1
// Создать интерфейс Student со следующими полями:
// firstName
// lastName
// isActive
// specialization   (QA или FullStack)
// group
// missedСlasses (количество пропущенных занятий)
//  Создать несколько объектов-студентов 

interface Student {
    firstName:string;
    lastName: string;
    isActive: boolean;
    specialization: "QA"|"FullStack";
    group: string;
    missedClasses: number;
}

let student1: Student = {
    firstName:"Igor",
    lastName: "Tsarenko",
    isActive: true,
    specialization: "QA",
    group: "QA-1",
    missedClasses: 2,
};

let student2: Student = {
    firstName:"Alina",
    lastName: "Boyko",
    isActive: true,
    specialization: "QA",
    group: "QA-1",
    missedClasses: 0,
};

let student3: Student = {
    firstName:"Alex",
    lastName: "Sakovsky",
    isActive: false,
    specialization: "FullStack",
    group: "FS-2",
    missedClasses: 8,
};

console.log(student1);
console.log(student2);
console.log(student3);

// Task 2
// Создать расширенный интерфейс студента с полями
// additionalGroup[] 
// (массив, содержащий дополнительные группы, необязательное поле)
// isRepeat (студент повторяет курс или нет)
// Создать несколько объектов

interface StudentExtends extends Student {
    additionalGroup?: string[];  // массив, содержащий дополнительные группы, необязательное поле
    isRepeat: boolean;           // студент повторяет курс или нет
}

let student4: StudentExtends = {
    firstName:"Yuliia",
    lastName: "Malinina",
    isActive: true,
    specialization: "QA",
    group: "QA-1",
    missedClasses: 1,
    additionalGroup: ["QA-2"],
    isRepeat: false,
}

let student5: StudentExtends = {
    firstName:"Kristina",
    lastName: "Bayrak",
    isActive: true,
    specialization: "QA",
    group: "QA-1",
    missedClasses: 1,
    additionalGroup: ["QA-2", "QA-3"],
    isRepeat: true,
}

let student6: StudentExtends = {
    firstName:"Roman",
    lastName: "Dvorak",
    isActive: true,
    specialization: "FullStack",
    group: "FS-2",
    missedClasses: 1,
    additionalGroup: ["QA-1", "FS-3"],
    isRepeat: false,
}

console.log(student4);
console.log(student5);
console.log(student6);

// Task 3
// Создать функцию, которая принимает массив чисел и возвращает их сумму. 

function getSum(numbers: number[]): number {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

console.log(getSum([5,10,15]));


// Task 4
// Создать функцию, которая принимает тип платежа (“cash”, “card”, “bank transfer”) 
// и возвращает код 100, 200, 300 соответственно.

function getCorrectCode(paymentType: string): number | string {
    switch(paymentType) {
        case 'cash' : return 100;
        break;
        case 'card' : return 200;
        break;
        case 'bank transfer' : return 300;
        break;
        default : return "This type is not allowed";
        break;
    }
}

console.log(getCorrectCode("card"));


// Task 5
// Создать тип данных описывающий функцию, 
// которая принимает аргумент-массив чисел и возвращает число. 
// Создать переменную этого типа, в которую положить функцию написанную на шаге 3. 
// Вызвать ее.

type SumFunction = (numbers: number[]) => number;

let sumFunc: SumFunction = getSum;
console.log(sumFunc([3,4,5]));  