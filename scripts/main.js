//This is the sign up button config

let myButton = document.querySelector('.signup');
function setUserName() {
  const myName = prompt('Please enter your name.');
}

myButton.onclick = () => {
    setUserName();
  }

  

  







//These are the functions for the backstories
//Three stories = three functions

function ShowAndHide1() {
    var x = document.getElementById('story1');
    if (x.style.display == 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function ShowAndHide2() {
    var x = document.getElementById('story2');
    if (x.style.display == 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function ShowAndHide3() {
    var x = document.getElementById('story3');
    if (x.style.display == 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}















