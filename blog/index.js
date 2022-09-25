const lightdarkbutton = document.getElementById("lightdarkbut");
const body = document.body;
const ls = localStorage;
const url = document.URL;
const isfile = url.includes("file:///");
const backbut = document.getAnimations("goback");

const theme = ls.getItem("theme");

if (theme) {
    body.classList.replace("dark",theme);
    if (body.classList.contains("light")) {
        lightdarkbutton.src="images/sun-solid.png"
    }
    else if (body.classList.contains("aqua")){
        lightdarkbutton.src="images/water-solid.png"
    }
    else{
        lightdarkbutton.src="images/moon-regular.png"
    }
}

backbut.onclick = () => {
    homebuttonPress();
};

lightdarkbutton.onclick = () => {
    if (body.classList.contains("dark")) {
        body.classList.replace("dark","light")
        ls.setItem("theme","light");
        lightdarkbutton.src="images/sun-solid.png"
    }
    else if (body.classList.contains("light")){
        body.classList.replace("light","aqua")
        ls.setItem("theme","aqua");
        lightdarkbutton.src="images/water-solid.png"
    }
    else{
        body.classList.replace("aqua","dark") 
        ls.setItem("theme","dark");
        lightdarkbutton.src="images/moon-regular.png"
    }
};

function homebuttonPress() {
    console.log("home button pressed");
    if (isfile){
        console.log("this is a file");
    }
    else
    {
        window.location.replace("https://www.obviousstudios.dev");
        console.log("Running on webserver");
    }
    //window.location.replace();
}

function gamesbuttonPress() {
    console.log("games button pressed");
    if (isfile){
        console.log("this is a file");
    }
    else
    {
        window.location.replace("https://www.obviousstudios.dev/games");
        console.log("Running on webserver");
    }
    //window.location.replace();
}

function teambuttonPress() {
    console.log("team button pressed");
    if (isfile){
        console.log("this is a file");
    }
    else
    {
        window.location.replace("https://www.obviousstudios.dev/team");
        console.log("Running on webserver");
    }
}

function blogbuttonPress () {
    console.log("blog button pressed");
    if (isfile){
        console.log("this is a file");
    }
    else
    {
        window.location.replace("https://www.obviousstudios.dev/blog");
        console.log("Running on webserver");
    }
}

function blogarchivebuttonPress() {
    window.location.replace("https://github.com/David-Orangemoon/obviousstudioswebsite/tree/main/Archive");
}