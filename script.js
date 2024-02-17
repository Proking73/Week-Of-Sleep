let theme = "dark";
// Make theme the state of the button switch (see left of drawings page)
const variables = document.querySelector(":root");
const logo = document.querySelector(".logo");

// onclick function with variablke being light/dark
if (theme == "light") {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    // variables.style.setProperty('--fontWeight', '600'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "/images/WhiteBG.png";
    console.log("lightmode");
    console.log(logo.src)
} else if (theme == "dark") {
    variables.style.setProperty('--lightMode', 'white');
    variables.style.setProperty('--darkMode', 'black');
    document.querySelector(".extras").style.filter = "invert(100%)";
    // variables.style.setProperty('--fontWeight', '400'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "/images/BlackBG.png";
    console.log("darkmode");
} else {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    console.log("lightmode(else)");
}