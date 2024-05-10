

// 07 May, 2024

/*
1: Create a Basic Promise: Write a function that returns 
a promise which resolves after a certain time (e.g., 1 second) and 
then logs a message to the console. 
*/
/* task 1, answer: 
let webSite = true;

const getData = () => {
    console.log("we are searching your request");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(webSite){
                resolve("Sure, is this your website")
                } else {
                    reject("no this is not mine")
                }
            }, 2000)
        })
    
};

getData()
.then((vl)=>{
    console.log(vl);
})
.catch((usr)=>{
    console.log(usr);
})
*/

                /* task 2 question, Chaining Promises:
                Create a sequence of promises where each resolves after a certain time (e.g., 1 second), 
                and chain them together so that each step waits for the previous one to complete before executing. 
                Log a message to the console after each step completes. */

                /* task 2 answer:
                Promise Chaining is a simple concept by which we may initialize 
                another promise inside our .then() method and 
                accordingly we may execute our results. 
                The function inside then captures the value returned by the previous promise 
                The syntax for using promise chaining is as follows. */


// task 2 answer code:
/*
    let promiseChaining = new Promise((resolve, reject)=> {
        
        resolve("hello JavaScript")
        
    })

    promiseChaining.then(function(result_1){ // result_1 === bu tepadagi func ga tehishli parametr
        console.log(result_1);
        return new Promise((resolve, reject)=>{
            resolve("this promise chaining")
        })
    }).then((result2)=>{
        
        console.log(result2);
    })
*/
                            /* task 3 question, Error Handling:
                            Modify the previous task to introduce error handling. 
                            Intentionally reject one of the promises 
                            with an error message and handle the error using .catch().
                            */
/*task 3 answer:             
        let net = "internet";

        function noName(){
            return new Promise((resolve, reject)=> {
                if(false){
                    resolve(`there is ${net}`)
                } else {
                    reject("this is error")
                }
            })
        }
        
        const errorHandling = function(){
            try {
                const result  = noName();
                console.log(result);
            } catch (error) {
                console.log(error.message);
            }
        }

        errorHandling()
*/     
        

                            





/* 

Promise.all:
Write a function that takes an array of values and returns a promise.
This promise should resolve after all the values
in the array have been processed (e.g., logged to the console) asynchronously. 
Use Promise.all() to achieve this.

Fetch Data:
Create a function that simulates fetching data from an API asynchronously. Use a promise to handle the asynchronous nature of the data fetching process. You can simulate this using setTimeout().

Conditional Resolving:
Write a function that returns a promise. If a certain condition is met (e.g., a random number is greater than 0.5), the promise should resolve successfully. Otherwise, it should reject with an error message.

Promise Race:
Create two promises that resolve after different amounts of time (e.g., 1 second and 2 seconds). Use Promise.race() to determine which promise resolves first and log a message to the console accordingly.

Async/Await:
Rewrite any of the previous tasks using async/await syntax instead of chaining promises.*/