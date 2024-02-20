let theme = "dark";
// Make theme the state of the button switch (see left of drawings page)
const variables = document.querySelector(":root");
const logo = document.querySelector(".logo");

// onclick function with variablke being light/dark
if (theme == "light") {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    document.querySelector("main").style.backgroundColor = " var(--darkMode)";
    // document.querySelectorAll("section").style.boxShadow = "  none" FIX THIS
    // variables.style.setProperty('--fontWeight', '600'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "images/WhiteBG.png";
    console.log("lightmode");
    console.log(logo.src)
} else if (theme == "dark") {
    variables.style.setProperty('--lightMode', 'white');
    variables.style.setProperty('--darkMode', 'black');
    document.querySelector(".extras").style.filter = "invert(100%)";
    document.querySelector("main").style.backgroundColor = " var(--darkModeBG)";
    // document.querySelector("section").style.boxShadow = "  0px 0px 2vmin 0.25vmin black" FIX THIS
    // variables.style.setProperty('--fontWeight', '400'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "images/BlackBG.png";
    console.log("darkmode");
} else {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    logo.src = "images/WhiteBG.png";
    console.log("lightmode(else)");
}

// document.querySelector(".letterDayOfTheWeek").addEventListener('click'. => {

// });