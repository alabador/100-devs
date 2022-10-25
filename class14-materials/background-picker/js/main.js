document.getElementById('earth').onclick = displayEarth;
document.getElementById('fire').onclick = displayFire;
document.getElementById('water').onclick = displayWater;
document.getElementById('air').onclick = displayAir;


function displayEarth() {
  document.querySelector('body').style.backgroundImage = "url('https://media4.giphy.com/media/yFWUUCVeZ0ttS/giphy.gif?cid=790b7611a384acb2bcc8b6034ce1a6c960469d509f809afa&rid=giphy.gif&ct=g')"
}

function displayFire() {
  document.querySelector('body').style.backgroundImage = "url('https://media2.giphy.com/media/d0O4zETPaQC08/giphy.gif?cid=790b7611ea294c30e4a701af41f42e6bccc9b494cf8d9fc6&rid=giphy.gif&ct=g')"
}

function displayWater() {
  document.querySelector('body').style.backgroundImage = "url('https://media0.giphy.com/media/F4w8zTcuwntv2/giphy.gif?cid=790b76113dec07d5fb9a8c71efe23a9c3150d3e67e66fc97&rid=giphy.gif&ct=g')"
}

function displayAir() {
  document.querySelector('body').style.backgroundImage = "url('https://media1.giphy.com/media/kUTevwxXSaqzK/giphy.gif?cid=790b761140cacae6dde0b2495637ce6fdd52e823aa649b51&rid=giphy.gif&ct=g')"
}