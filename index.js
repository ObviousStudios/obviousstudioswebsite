const lightdarkbutton = document.getElementById("lightdarkbut");
const body = document.body;
const ls = localStorage;

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

function gamesbuttonPress() {
    console.log("games button pressed");
}

function teambuttonPress() {
    console.log("team button pressed");
}

function blogbuttonPress () {
    console.log("blog button pressed");
}