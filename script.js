// Get the fading background element
const background = document.querySelector("#background");
const hero = document.querySelector(".hero")
const socials = document.querySelectorAll(".socials")
const imgContainer = document.querySelector('.img-container');
const txtContainer = document.querySelector('.txt-container');

// Add a scroll event listener
window.addEventListener("scroll", function() {

    const scrollPercentage = (window.scrollY / window.innerHeight);
    console.log(scrollPercentage)
    // Calculate the opacity based on the scroll position
    const opacity = Math.min(scrollPercentage, 1)
    const opacityBackground = Math.max(opacity, 0.3)

    let opacityHero;
    if (opacity < 0.3) {
        opacityHero = 0;
    } else {
        opacityHero = (opacity - 0.3) / 0.7;
    }
    
    // Set the background color with opacity
    background.style.backgroundImage = `linear-gradient(rgb(0,0,0,${opacityBackground}), rgb(0,0,0,${opacityBackground})), url(images/salar_uyuni.jpg)`;
    hero.style.opacity = 1 - opacityHero;
    socials.forEach(social => {
        social.style.opacity = 1 - opacityHero;
      });

    imgContainer.style.transform = `translateX(${200 - 200 * Math.min(scrollPercentage, 1)}%)`;
    txtContainer.style.transform = `translateY(${140 - 100 * scrollPercentage}%)`;

});

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