let total = 0;

const result = document.getElementById('placeToPutResult');
document.querySelector('#zero').addEventListener('click', makeZero);
document.querySelector('#plus-three').addEventListener('click', addThree);
document.querySelector('#plus-nine').addEventListener('click', addNine);
document.querySelector('#minus-two').addEventListener('click', subtractTwo);
document.querySelector('#times-two').addEventListener('click', multiplyTwo);

function makeZero() {
  total = 0;
  result.innerText = total;
}

function addThree() {
  total += 3;
  result.innerText = total;
}
function addNine() {
  total += 9;
  result.innerText = total;
}
function subtractTwo() {
  total -= 2;
  result.innerText = total;
}
function multiplyTwo() {
  total *= 2;
  result.innerText = total;
}