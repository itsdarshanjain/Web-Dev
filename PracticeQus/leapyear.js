let y= +(window.prompt("Enter any Year --> "))
if((y%4==0&&y%100!=0)||(y%400==0))  document.write("leap year")
else    document.write("Not a leap year")