

let radioButtons = document.getElementsByClassName('bird-picker');
let birds = document.getElementsByClassName('bird');


function birdPicker() {    
    for (let radioButton of radioButtons ){
        if(radioButton.checked) {
            radioButtonIdChecked = radioButton.id;

            return radioButton.value;
        }
    }
}


function displayBird () {
    for (let bird of birds){
        bird.classList.add('hidden')
    }

    let birdy = document.getElementById(birdPicker());
    birdy.classList.remove('hidden');

}
