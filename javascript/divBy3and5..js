// // let n=+window.prompt("Enter the no")
// let count=0;
// for(let i=1;i<=n;i++){
//     if(i%3===0&&i%5===0)    {console.log(i); count++
// }
// // }
// // console.log(count)

// const a= document.getElementsByTagName("h1");
// const b=document.getElementsByClassName("heading")
// // a[0].style.color='blue'
// b.style.color='blue';

// ab();
// function ab(){
//     console.log("hello")
// }

// let age = 20;

// if (age < 18) {
//     throw new Error("You are not eligible.");
// }

// console.log("Welcome");

try {
    let age = 15;

    if (age < 18) {
        throw new Error("Age must be 18 or above.");
    }

    console.log("Welcome");

} catch (err) {
    console.log(err.message);
}