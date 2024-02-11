// Use fetch API to load the text file
fetch('cv_text.txt')
.then(response => response.text()) // Get the response and read it as text
.then(text => {
    // Find the element by ID and set its text content to the loaded text
    document.getElementById('cv_text').innerText = text;
})
.catch(error => {
    // If there's an error (e.g., file not found), log it to the console
    console.error('Error loading the text:', error);
});



const imgContainer = document.querySelector('.img-container');
const txtContainer = document.querySelector('.txt-container');
const background = document.querySelector("#static-shield");

let timeout1;
let timeout2;
let enableWheelEvent = true;
let userInputEnabled = true;

function pauseUserInput(duration) {
    userInputEnabled = false;
    setTimeout(() => {
        userInputEnabled = true;
    }, duration);
}

const wheelFunc = function(event) {
    
    if (!userInputEnabled || !enableWheelEvent) return;

    pauseUserInput(1000);
    
    var wheel = event.deltaY;

    if (wheel > 0) {
        imgContainer.style.transform = 'translateX(0%)';
        txtContainer.style.transform = 'translateY(0%)';
        background.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        background.style.zIndex = '0';

        clearTimeout(timeout2)
        timeout1 = setTimeout(function() {
            txtContainer.classList.add('txtViewTwo');
            txtContainer.classList.remove('txtViewOne')
        }, 1000);
        
    }
    else {
        imgContainer.style.transform = 'translateX(200%)';
        txtContainer.style.transform = 'translateY(100vh)';
        background.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        txtContainer.classList.add('txtViewOne');
        txtContainer.classList.remove('txtViewTwo');

        clearTimeout(timeout1)
        timeout2 = setTimeout(function() {
            background.style.zIndex = '-10';
        }, 1000);
        
    }
}

const checkScroll = function() {
    if (window.scrollY === 0) {
        enableWheelEvent = true;
    } else {
        enableWheelEvent = false;
    }
}

window.addEventListener('wheel', wheelFunc)

window.addEventListener('scroll', checkScroll)



