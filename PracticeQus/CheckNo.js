let n;
document.getElementById("button").onclick = function () {
  n = +document.getElementById("input").value;
  if (n > 0) {
    document.getElementById("span").textContent = `Positive`;
  } else if (n < 0) {
    document.getElementById("span").textContent = `Negative`;
  } else {
    document.getElementById("span").textContent = 'Zero';
  }
};
