// let a= window.prompt("Enter three number separated by comma")
// let arr=a.split(',')
// let largest
// // if(arr[0]>=arr[1]&&arr[0]>=arr[2])  largest=arr[0]
// // else if(arr[1]>=arr[0]&&arr[1]>=arr[2]) largest=arr[1]
// // else if(arr[2]>=arr[0]&&arr[2]>=arr[1])  largest=arr[2]

// let p=arr[0]; q=arr[1]; r=arr[2]
// document.write("The largest of all three is "+largest)
let largest1;
let p = +window.prompt('Enter first');
let q = +window.prompt('Enter second');
let r = +window.prompt('Enter third');
(p >= q && p >= r) ? (largest1 = p) : q >= r ? (largest1 = q) : (largest1 = r);
document.write(largest1);
console.log(largest1);
