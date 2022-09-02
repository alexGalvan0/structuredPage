
// create document varaibles that are needed the the functions
let radioButtons = document.getElementsByClassName('bird-picker');
let birds = document.getElementsByClassName('bird');

// itterate through all of the html elements with the class name bird picker.
function birdPicker() {    
    for (let radioButton of radioButtons ){

        //check with element has a radio button that has been checked
        if(radioButton.checked) {
            radioButtonIdChecked = radioButton.id;
            
            //return the id of the radio button that was picked 
            return radioButton.value;
        }
    }
}


function displayBird () {
    for (let bird of birds){

        // hide all of the bird elements
        bird.classList.add('hidden')
    }

    //remove hidden class name from the element that has the checked radio button.
    let birdy = document.getElementById(birdPicker());
    birdy.classList.remove('hidden');

}
