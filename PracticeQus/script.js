let num;

document.getElementById('myButton').onclick = function () {
  num = Number.parseInt(document.getElementById('myInput').value);
  if (num % 2 == 0) {
    document.getElementById('answer').textContent = 'Even';
  } else {
    document.getElementById('answer').textContent = 'Odd';
  }
};
