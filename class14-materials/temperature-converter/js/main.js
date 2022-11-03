//Write your pseduo code first! 

//on click
//function (temp)
//convert to selected temp
//return converted temp to user
//change innertext to returned value

const input = document.querySelector('#temp-input');
const button = document.querySelector('#convert');
const temp = document.querySelector('.temp');

function convertTemp(temp){
    return (temp - 32) * (5/9) + ' C';
}

button.addEventListener('click', function() {
    temp.innerText = convertTemp(input.value);
});
