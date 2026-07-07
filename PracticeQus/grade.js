function getGrade(a) {
  if (a >= 90 && a <= 100) return 'A';
  else if (a >= 80 && a <= 89) return 'B';
  else if (a >= 70 && a <= 79) return 'C';
  else if (a >= 60 && a <= 69) return 'D';
  else if (a >= 33 && a <= 59) return 'E';
  else if (a >= 0 && a <= 32) return 'F';
  else return 'Invalid';
}

let c=+window.prompt("Enter Marks : ")
let result=getGrade(c)
console.log(result)
const marks = [85, 48, 37, 90, 85];

// 'map' ka use karke har ek mark ke liye grade nikalein
const grades = marks.map(getGrade);

console.log(grades); // Output: ["B", "E", "E", "D", "B"]

const student = {
  name: 'Dj',
  age: 28,
  mobile: 9876543210,
};
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(Object.bind(student));
student['name'] = 'Vj';
console.log(student.name);
