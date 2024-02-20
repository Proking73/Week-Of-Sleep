let theme = "light";
// Make theme the state of the button switch (see left of drawings page)
const variables = document.querySelector(":root");
const logo = document.querySelector(".logo");
const daySections = document.querySelectorAll("section");
var height = window.innerHeight;

// onclick function with variablke being light/dark
if (theme == "light") {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    document.querySelector("main").style.backgroundColor = " var(--darkMode)";

    daySections.forEach(day => {
        day.style.boxShadow = " 0px 0px 2vmin 0.25vmin hsla(0, 0%, 50%, 0.5)";
    });
    // variables.style.setProperty('--fontWeight', '600'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "images/WhiteBG.png";
    console.log("lightmode");
    console.log(logo.src)
} else if (theme == "dark") {
    variables.style.setProperty('--lightMode', 'white');
    variables.style.setProperty('--darkMode', 'black');
    document.querySelector(".extras").style.filter = "invert(100%)";
    document.querySelector("main").style.backgroundColor = " var(--darkModeBG)";
    
    daySections.forEach(day => {
        day.style.boxShadow = " 0px 0px 2vmin 0.25vmin black";
    });
    // variables.style.setProperty('--fontWeight', '400'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "images/BlackBG.png";
    console.log("darkmode");
} else {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    logo.src = "images/WhiteBG.png";
    console.log("lightmode(else)");
}
// let intervalID;
// document.querySelector(".letterDayOfTheWeek").addEventListener('click', () => {
//     intervalID = setInterval(scrollUp, 1000);;
// });
// function scrollUp() {
//     scrollBy(0, -0.1 * height)
//     console.log(intervalID);
// }