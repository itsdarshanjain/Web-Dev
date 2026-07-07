let selection=+window.prompt("Enter--> \n1.Rock\n2.Paper\n3.Scissor")

function rps(selection,computer){
    if(selection==1&&computer==3)   return "you"
    else if(selection==2&&computer==1) return "you"
    else if(selection==3&&computer==2) return "you"
    else if(selection==computer)  return "No One"
    else return "computer"
}
let computer=3;
console.log(rps(selection,computer)+" Won the game ")