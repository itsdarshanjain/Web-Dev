let n=+window.prompt("Enter the no")
let count=0;
for(let i=1;i<=n;i++){
    if(i%3===0&&i%5===0)    {console.log(i); count++
}
}
console.log(count)