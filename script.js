let theme = "dark";
// Make theme the state of the button switch (see left of drawings page)
const variables = document.querySelector(":root");
const logo = document.querySelector(".logo");

if (theme == "light") {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    // variables.style.setProperty('--fontWeight', '600'); CHANGE THIS VALUE INTO SOMETHING
    logo.src = "/images/WhiteBG.png";
    console.log("lightmode");
} else if (theme == "dark") {
    variables.style.setProperty('--lightMode', 'white');
    variables.style.setProperty('--darkMode', 'black');
    // variables.style.setProperty('--fontWeight', '600'); CHANGE THIS VALUE INTO SOMETHING
    logo.src == "/images/BlackBG.png";
    console.log("darkmode");
} else {
    variables.style.setProperty('--lightMode', 'black');
    variables.style.setProperty('--darkMode', 'white');
    console.log("lightmode(else)");
}