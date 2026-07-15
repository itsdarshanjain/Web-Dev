console.log("Darshan Jain");



// async await 

// async function add(a,b) {
//     const result = await a+b
//     console.log(result);
    
// }

// add(10,20);

// settime out 

// console.log("Start");

// setTimeout(()=>{
//     console.log("Hiii");

// },2000)

// console.log("End");



//  set interval

// let count = 1;

// const timer = setInterval(function () {

//     console.log("Count:", count);

//     count++;

//     if (count > 5) {

//         clearInterval(timer);

//         console.log("Interval Stopped");

//     }

// }, 1000);

// const clock = setInterval(function () {

//     console.log(new Date().toLocaleTimeString());

// }, 1000);

// setTimeout(function () {

//     clearInterval(clock);

//     console.log("Clock Stopped");

// }, 15000);


// const promises = new Promise((res,rej)=>{
//     res("Hii")
// })
// promises.then((data)=>{
//     console.log(data);
    
    

// })

async function add(a,b) {
    try {
        const result = await a + b;
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        console.log("completed");
        
    }
 }
add('abcd ' );