
//          task-1
/* istalgan sonni binaryga o'tkazing va 
nechta 0 hamda nechta 1 qatashganini aniqlng*/
 
// console.log(parseInt("101", 2))

// const binaryCountFcuntion = (number) => {
//     let anyNumber = number.toString(2);
//     let count0 = 0; let count1 = 0;
    
//     for (let i = 0; i < anyNumber.length; i++) {
//         if (anyNumber[i] === '0') {
//             count0++
//         } else if (anyNumber[i] === '1') {
//             count1++
//         }
//     }
//     return {count0, count1}
// }


// const number = 123;
// // let convertedToBinary = number.toString(2);

// let  convertedToBinary = binaryCountFcuntion(number)
// console.log("binary Number:", number.toString(2));
// console.log("count of 0s:", convertedToBinary.count0);
// console.log("count of 1s:", convertedToBinary.count1);


//              task-1

/* Berilgan sonalr ichidan 
eng katta va eng kichigining ayirmasini toping.  
Musbat son chiqmasin*/



// task 2 answer
// const findMaxAndMinNumber =(numbers) => {
//     let max = Math.max(...numbers);
//     let min = Math.min(...numbers);

//     let result  = min - max;
//     return result;
// }

// const numbers = [1, 3 , 4 , 5 ,10, -1];
// let difference = findMaxAndMinNumber(numbers);

// console.log("Max number is", Math.max(...numbers));
// console.log("Min number is", Math.min(...numbers));
// console.log("difference is",difference);

//                  task - 4 naswer 
/* rnadom number chiqadigan funksiya yozing 
bu funksiya max va min raqamlar qabul qilsin*/

// const randomNumber = (max, min) =>{
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomNumber(50, 1));



