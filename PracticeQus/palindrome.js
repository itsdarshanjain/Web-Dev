n=+window.prompt("Enter the Number ")
const n1=n;
let n2=0;
do{
    m=n%10
    n=Math.floor(n/10)
    n2=(n2*10)+m
}while(n!=0)
    if(n1==n2)  console.log("yes palindrome number")
    else        console.log("not a palindrome number")
console.log(n1,"---",n2) 
