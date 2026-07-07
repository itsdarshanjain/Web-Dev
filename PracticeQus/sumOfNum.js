let a = +window.prompt("Enter Number to which u want to find sum upto ")
function sumUsingFor(a){
    let sum=0;
    for(let i=1;i<=a;i++){
        sum+=i;
    }
    return sum;
}
function sumUsingWhile(a){
    let sum=0;
    let i=1;
    while(i<=a){
        sum+=i;
        i++
    }
    return sum;
}
function sumUsingDo(a){
    let sum=0;
    let i=1;
    do{
        sum+=i;
        i++;
    }while(i<=a)
        return sum;
}

console.log(sumUsingFor(a));
console.log(sumUsingDo)
console.log(sumUsingWhile(a))