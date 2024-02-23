const themeButton = document.querySelector(".themeButton");
const currentTheme = localStorage.getItem("theme");
let theme = currentTheme;

// window.addEventListener('load', () => {
//     if (currentTheme == "undefined" || currentTheme == "light") {
//         theme = "light";
//     } else if (currentTheme == "dark") {
//         theme = "dark";
//     } else {
//         theme = "light";
//     }
//     console.log(theme)
// });

function themeCheck() {
    console.log(`theme = "${theme}"\ncurrentTheme = "${currentTheme}".`)
}

function themeInitiate() {
    if (currentTheme == "light") {
        variables.style.setProperty('--lightMode', 'black');
        variables.style.setProperty('--darkMode', 'white');
        document.querySelector("main").style.backgroundColor = " var(--darkMode)";
    
        daySections.forEach(day => {
            day.style.boxShadow = " 0px 0px 2vmin 0.25vmin hsla(0, 0%, 50%, 0.5)";
        });
        // variables.style.setProperty('--fontWeight', '600'); CHANGE THIS VALUE INTO SOMETHING
        logo.src = "images/WhiteBG.png"
        theme = "light";
    
    } else if (currentTheme == "dark") {
        variables.style.setProperty('--lightMode', 'white');
        variables.style.setProperty('--darkMode', 'black');
        document.querySelector(".extras").style.filter = "invert(100%)";
        document.querySelector("main").style.backgroundColor = " var(--darkModeBG)";
        document.querySelector(".locationName").style.backgroundColor = "var(--darkModeBG)";
        
        daySections.forEach(day => {
            day.style.boxShadow = " 0px 0px 2vmin 0.25vmin black";
        });
        // variables.style.setProperty('--fontWeight', '400'); CHANGE THIS VALUE INTO SOMETHING
        logo.src = "images/BlackBG.png";
        theme = "dark";

    }
}

themeInitiate();
themeCheck();

themeButton.addEventListener('click', () => {
    if (theme == "light") {
        variables.style.setProperty('--lightMode', 'black');
        variables.style.setProperty('--darkMode', 'white');
        document.querySelector("main").style.backgroundColor = " var(--darkMode)";
        
        daySections.forEach(day => {
            day.style.boxShadow = " 0px 0px 2vmin 0.25vmin hsla(0, 0%, 50%, 0.5)";
        });

        logo.src = "images/WhiteBG.png"
        
        theme = "dark";
        console.log("light")
        
    } else if (theme == "dark") {
        variables.style.setProperty('--lightMode', 'white');
        variables.style.setProperty('--darkMode', 'black');
        document.querySelector(".extras").style.filter = "invert(100%)";
        document.querySelector("main").style.backgroundColor = " var(--darkModeBG)";
        document.querySelector(".locationName").style.backgroundColor = "var(--darkModeBG)";
        
        daySections.forEach(day => {
            day.style.boxShadow = " 0px 0px 2vmin 0.25vmin black";
        });

        logo.src = "images/BlackBG.png";
        
        theme = "light";
        console.log("dark")
        
    }
    
    localStorage.setItem("theme", theme);
    themeCheck();
});
