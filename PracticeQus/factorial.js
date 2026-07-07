let n=+window.prompt("Enter number")
let fact=1;
for(let i=n;i>=1;i--){
    fact*=i;
}
console.log(fact);
fact=1;
let i=n;
while(i>=1){
    fact=fact*i
    i--
}
console.log(fact)
fact=1;
i=n;
do{
    fact*=i
    i--
}while(i>=1)
console.log(fact)