//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check);
document.querySelector('#form').addEventListener('submit', function(e){
  check();
  e.preventDefault();
});
const view = document.querySelector("#placeToSee");

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
    view.innerText = "YOU HAVE CLASS!";
  }else if( day === "saturday" || day === "sunday"){
    view.innerText = "It's the Weekend!";
  }
  else if( day === "wednesday") {
    view.innerText = "It's humpday!";
  }
  else{
    view.innerText = "Boring...";
  }

}
