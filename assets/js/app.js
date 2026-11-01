//--------------------------------------------------------------reduce method-----------------------------------------------------------------------------

// reduce method

// task 1
let age = [10,20,30,5,15]
let result = age.reduce((acc, cv)=>{
    acc = acc + cv;
    return acc;
});
console.log(result)

// task 2
let num = [10,20,30,40,50]
let res1 = num.reduce((acc,cv)=>{
    acc.push(cv*2)
    return acc;
},[])
console.log(res1)

var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },   
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// Get all retail companies using Reduce

let result1 = companies.reduce((acc,cv)=>{
    if (cv.category.toLowerCase().trim() === 'retail'){
        acc.push(cv);
     }
     return acc;
},[]);
console.log(result1)

let result0 = companies.reduce((acc,cv)=>{
    if (cv.category.toLowerCase().includes('retail')){
        acc.push(cv);
    }
    return acc;
},[])
console.log(result0)

let result2 = companies.reduce((acc,cv)=>{
    if (cv.category.toLowerCase().indexOf('retail')>-1){
        acc.push(cv);
    }
    return acc;
},[])
console.log(result2)

//[{compName : "company one", lifespan : "1981-2003"}]

let  res = companies.reduce((acc,cv)=>{
    let obj = ({
        compName : cv.name,
        lifeSpan : `${cv.start} - ${cv.end}`
    })
    acc.push(obj);
    return acc;
},[]);
console.log(res)

//[{"company one", duration : "22 Years"}]

let res0 = companies.reduce((acc,cv)=>{
    acc.push({
        compName : cv.name,
        duration : `${cv.start - cv.end} Years`
    })
    return acc;
},[]);
console.log(res0);

// [
//     "The company name is company one and category is finance and it run for 22 yeras",
//     "The company name is company two and category is retail and it run for 16 yeras",

// ]

let comp = companies.reduce((acc,cv)=>{
   acc.push(`The company name is ${cv.name} and category is ${cv.category} and it run for ${cv.end - cv.start} Years`)
    return acc;
},[]);
console.log(comp)
 
//company who run at least 10 years

let comp0 = companies.reduce((acc,cv)=>{
    if(cv.end - cv.start >= 10){
        acc.push(cv);
    }
    return acc;
},[]);
console.log(comp0)

//[{compname : "company one" , duration : "22 years"}]
// using isArray

// task 1

let numArray = [1,2,3,4,5,6,7,8];
console.log(Array.isArray(numArray));

let num0 = 10 
console.log(Array.isArray(num0));


let res2 = companies.reduce((acc,cv)=>{
    if(!Array.isArray(acc)){
        acc = [{compName : acc.name, duration : `${acc.end - acc.start} Years`}];
    }
    acc.push({
        compName : cv.name,
        duration : `${cv.end - cv.start} Years`
    })
    return acc;
});
console.log(res2)

//----------------------------------------------Find method-----------------------------------------

// task 1

let numbers = [10,20,40,50];
let result01 = numbers.find((num)=>{
      return num > 25;
});
console.log(result01);

// task 2

let nums = [21,45,88,54,78,87,34,23,11];
let result3 = nums.find((params)=>{
    return params > 50;
});
console.log(result3);

// task 3

let companies1 = [
    {name: "TCS" , category: "IT"},
    {name: "DMart" , category: "Retail"},
    {name: "Infosys" , category: "IT"}
];
let com = companies1.find((comp)=>{
    return comp.category === 'Retail';
});
console.log(com)

// task 4

let num1 = [10,25,30,40,50];
let resul = num1.find((num)=>{
    return num % 2 !==0;
});
console.log(resul);

// task 5

let students0 = [
    { name: "Aisha", marks: 45 },
    { name: "Rahul", marks: 80 },
    { name: "Priya", marks: 90 }
];

let resul0 = students0.find((std) => {
    return std.marks > 70;
});

console.log(resul0);

//-------------------------------------sort method-------------------------------------------------------
// task 1
let fruits = ['mango','apple','banana','kiwi','orange'];
fruits.sort();
console.log(fruits);

// task 2
let num2 = [77,12,29,30,24,21];
num2.sort();
console.log(num2)

// task 3
let number = [20,40,30,50,10,60,90];
number.sort((a,b)=>{
    return a - b;
});
console.log(number);

// task 4
let number1 = [30,10,40,50,80,77,33,22,34,57];
number1.sort((a,b)=>{
    return b - a;
});
console.log(number1)

//--------------------------------------------------------FindIndex method---------------------------------------------
// task 1
let number0 = [10, 20, 30, 40, 50];
let run1 = number0.findIndex((num) => {

    return num === 30;
});
console.log(run1);

// task 2
let nums1 = [10,20,30,45,40,50];
let run=nums1.findIndex((a)=>{

    return a > 30;
});
console.log(run);

// task 3
let number01 = [10,20,30,40,50];
let run0 = number01.findIndex((param)=>{

    return param > 20;
});
console.log(run0);

// task 4
let nums0 = [5, 10, 15, 20, 25];

let run2 = nums0.findIndex((num) => {
    return num > 15;
});

console.log(run2);

//--------------------------------------------some method-----------------------------------------
// task 1
let act = [7,3,4,10,9,3];
let range = act.some((num)=>{

    return num > 5;
});
console.log(range);

// task 2
let act1 = [12,43,55,67,90,87];
let range1 = act1.some((num)=>{

    return num > 100;
});
console.log(range1);

// task 3
let marks = [35,45,55,67,88,];
let mark = marks.some((num)=>{

    return num > 75;
});
console.log(mark);

// task 4
let act2 = [5, 10, 15, 20];
let range2 = act2.some((num) => {

    return num > 50;
}); 

console.log(range2)

// task 5
let students1 = [
    {name: "Aisha" , age: 20},
    {name: "Riya" , age: 22},
    {name: "shareya" , age: 25}
];
let stud = students1.some((std)=>{

    return std.age > 30
});
console.log(stud)

//--------------------------------------------------------every method----------------------------------------------------
// task 1
let act3 = [10,40,30,20,33,55,67];
let range0 = act3.every((num)=>{

    return num < 70;
});
console.log(range0);

// task 2
let act4 = [100,300,700,200,600,780];
let std = act4.every((num)=>{

    return num > 100
});
console.log(std);

// task 3
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 }
];

let product = products.every((params)=>{
    return params.price > 1000
});
console.log(product)

// task 4
let students = [
    {name: "Aisha" , age: 20},
    {name: "Riya" , age: 22},
    {name: "shareya" , age: 25}
];

let student = students.every((std)=>{
    return std.age > 18;
});
console.log(student)

// task 5
let cars = [
    {name: "fortuner" , price: 7700000},
    {name: "lamborgini" , price: 55000000},
    {name: "rangerover" , price: 45000000}
];

let car = cars.every((param)=>{

    return param.price > 50000000
});
console.log(car)

// substring

// task 1

// let str = "Hello JavaScript";

// let result00 = str.substring(6,10);
// console.log(result00);

// // task 2

// let str1 = "Aisha Jahagirdar";
// let resu = str1.substring(0,16);
// console.log(resu);

// task 3

// let str = "JavaScript";
// console.log(str.slice(2,8));

// // task 4

// let stre = "Aisha Jahagirdar";
// console.log(stre.slice(8,1));

// // task 5

// let stre1 = "JavaScript";
// console.log(stre1.slice(-8,-1));

// // task 6

// function greet(){
//     console.log("Goodmorning");
// }
// greet();
// greet();

// // task 7

// function greet1(name){
//     return "Hello"+ " " +name;
// }
// let resultt = greet1("Aisha");
// console.log(resultt);

// // task 9

// function greet2(name) {
//     return "Hello Aisha";     
// }
// console.log(greet2());

// // Even Number

// let arr = [10,15,20,25,30,35,40]
// arr.forEach(function(num){
//     if (num % 2 === 0){
//         console.log(num)
//     }
// });

// // Odd Number

// let arr1 = [10,15,20,25,30,35,40]
// arr1.forEach(function(num){
//     if(num % 2 !==0){
//         console.log(num)
//     }
// });
// //--------------------
// function evenNumber(num){
//     if(num % 2 === 0){
//         return "Even Number";
//     }else{
//         return "Odd Number";
//     }
// };
// console.log(evenNumber(7));
// console.log(evenNumber(4));

// //concatenation
// let fname = "Aisha";
// let lname = "Jahagirdar";

// let fullName = fname+ " " +lname;
// console.log(fullName);

// let a = "Rohit";
// let b = "Sharma";
// console.log(a+ " " +b);

// // First Letter or last letter
// let name0 = "Aisha";
// console.log(name0[0])
// console.log(name0[1])

// let name1 = "Aisha";
// console.log(name1[name1.length-3])

// let name2 = "Aisha";
// console.log(name2[3]);
// console.log(name2[name2.length-1])

// Flat() method

let arr = [1,2,3,4,[5,6],7,8,];
let retail  = arr.flat();
console.log(retail);


let arr0 = [10,20,[30,[40],50,60],70];
let reta = arr0.flat(1);
console.log(reta);


let arr1 = [10,[20,[30,40],[50,60],70]];
let ret = arr1.flat(2);
console.log(ret);

let arr8 = [10,2,3,[4,5,[6,7,[8,9]]]];
let ret1 = arr8.flat(2);
console.log(ret1);

let cars0 = ["BMW","Audi",["Mercedes","Volvo"],"Toyota"];
let ret2 = cars0.flat();
console.log(ret2);


let cars1 =[
    {name: "Aisha", age: 20},
    [
        {name: "Rohit", age: 25},
        {name: "Riya", age: 22},
        [
             {name: "Rahul" , age: 30},
             {name: "Priya" , age: 28},
             [
                {name: "Amrit" , age: 35}
             ]
        ]
    ]
]
let ret3 = cars1.flat(2);
console.log(ret3);


let students01 = [
    {name: "Aisha", mark: 85},
    [
        {name: "Rahul", mark: 90},
        
        {name: "priya", mark: 75}
    ],
    {name: "Riya",mark: 95}
];
let result00 = students01.flat();
console.log(result00);


let employees = [
    {id: 1, name: "Aisha"},
    [
        {id: 2, name: "Rahul"},
        {id:3, name: "priya"}
    ],    
    [
        {id:4, name: "Riya"},
      [  
        {id:5, name: "Rohit"},
      ]  
    ],
    [
        {id:6, name: "Amrit"},
    ],
     {id:7, name: "Rohit"}
];
let resu = employees.flat(3);
console.log(resu);

// fill() method

let arr2 = [1,2,3,4,5,6,7,];
let retail1 = arr2.fill(0);
console.log(retail1);

let arr3 = [10,20,30,40,50];
let retail2 = arr3.fill(0,2);
console.log(retail2);

let arr4 = [10,20,30,40,50,60,70,80];
let retail3 = arr4.fill(100,0,2,);
console.log(retail3);

let arr5 = [10,20,30,40,50,60,70,80];
let retail4 = arr5.fill(100,2,5);
console.log(retail4);

let arr6 = [12,29,27,77,98,24,45,65,89,43];
let retail5 = arr6.fill(0,3,7);
console.log(retail5);

let arr7 = [10,20,30,40,50,60,70,80];
let retail6 = arr7.fill(100,0,2);
console.log(retail6);

let employees1 = [
    {id: 1, name: "Aisha"},
    {id: 2, name: "Rahul"},
    {id: 3, name: "Priya"},
    {id: 4, name: "Riya"},
]
let ret0 = employees1.fill({id: 5, name: "Rohit"});
console.log(ret0);

let value = [10,20,3,40,6,4,3,7,8,9];
let rest = value.fill(50,0,3);
console.log(rest);

let student00 = [
    {name: "Aisha", age: 20 , marks: 97},
    {name: "Rohit", age: 25 , marks: 90},
    {name: "Riya", age: 22 , marks: 92},
    {name: "Rahul", age: 30, marks: 88}
];
let resul1 = student00.fill({name: "Priya", age: 28 , marks: 99});
console.log(resul1);

