const exp = document.querySelectorAll('div');
const tex = document.querySelectorAll('h3');
function open(){
    if (exp[0].style.width === "5vw") {
        exp[0].style.width = "70vw";
        exp[0].style.transition = "0.7s";
        tex[0].style.opacity = "1";
        tex[0].style.transition = "0.5s"
        exp[3].style.width = "5vw";
        exp[2].style.width = "5vw";
        exp[1].style.width = "5vw";
        exp[4].style.width = "5vw";
        tex[4].style.opacity = "0";
        tex[4].style.transition = "0.5s"
        tex[3].style.opacity = "0";
        tex[3].style.transition = "0.5s"
        tex[2].style.opacity = "0";
        tex[2].style.transition = "0.5s"
        tex[1].style.opacity = "0";
        tex[1].style.transition = "0.5s"
    } else {
        exp[0].style.width = "5vw";
        tex[0].style.opacity = "0";
        tex[0].style.transition = "0.5s"
    }
}
exp[0].addEventListener('click', open)
function openn(){
    if (exp[1].style.width === "5vw") {
        exp[1].style.width = "70vw";
        exp[1].style.transition = "0.7s";
        tex[1].style.opacity = "1";
        tex[1].style.transition = "0.5s"
        exp[3].style.width = "5vw";
        exp[2].style.width = "5vw";
        exp[4].style.width = "5vw";
        exp[0].style.width = "5vw";
        tex[4].style.opacity = "0";
        tex[4].style.transition = "0.5s"
        tex[3].style.opacity = "0";
        tex[3].style.transition = "0.5s"
        tex[2].style.opacity = "0";
        tex[2].style.transition = "0.5s"
        tex[0].style.opacity = "0";
        tex[0].style.transition = "0.5s"
    } else {
        exp[1].style.width = "70vw";
        tex[1].style.opacity = "1";
        tex[1].style.transition = "0.5s"
    }
}
exp[1].addEventListener('click', openn)
function opennn(){
    if (exp[2].style.width === "5vw") {
        exp[2].style.width = "70vw";
        exp[2].style.transition = "0.7s";
        tex[2].style.opacity = "1";
        tex[2].style.transition = "0.5s"
        exp[4].style.width = "5vw";
        exp[3].style.width = "5vw";
        exp[1].style.width = "5vw";
        exp[0].style.width = "5vw";
        tex[4].style.opacity = "0";
        tex[4].style.transition = "0.5s"
        tex[3].style.opacity = "0";
        tex[3].style.transition = "0.5s"
        tex[1].style.opacity = "0";
        tex[1].style.transition = "0.5s"
        tex[0].style.opacity = "0";
        tex[0].style.transition = "0.5s"
    } else {
        exp[2].style.width = "70vw";
        tex[2].style.opacity = "1";
        tex[2].style.transition = "0.5s"
    }
}
exp[2].addEventListener('click', opennn)
function opennnn(){
    if (exp[3].style.width === "5vw") {
        exp[3].style.width = "70vw";
        exp[3].style.transition = "0.7s";
        tex[3].style.opacity = "1";
        tex[3].style.transition = "0.5s"
        exp[4].style.width = "5vw";
        exp[2].style.width = "5vw";
        exp[1].style.width = "5vw";
        exp[0].style.width = "5vw";
        tex[4].style.opacity = "0";
        tex[4].style.transition = "0.5s"
        tex[2].style.opacity = "0";
        tex[2].style.transition = "0.5s"
        tex[1].style.opacity = "0";
        tex[1].style.transition = "0.5s"
        tex[0].style.opacity = "0";
        tex[0].style.transition = "0.5s"
    } else {
        exp[3].style.width = "70vw";
        exp[4].style.width = "5vw";
        exp[2].style.width = "5vw";
        exp[1].style.width = "5vw";
        exp[0].style.width = "5vw";
        tex[3].style.opacity = "1";
        tex[3].style.transition = "0.5s"
    }
}
exp[3].addEventListener('click', opennnn)
function opennnnn(){
    if (exp[4].style.width === "5vw") {
        exp[4].style.width = "70vw";
        exp[4].style.transition = "0.7s";
        exp[3].style.width = "5vw";
        exp[2].style.width = "5vw";
        exp[1].style.width = "5vw";
        exp[0].style.width = "5vw";
        tex[4].style.opacity = "1";
        tex[4].style.transition = "0.5s"
        tex[3].style.opacity = "0";
        tex[3].style.transition = "0.5s"
        tex[2].style.opacity = "0";
        tex[2].style.transition = "0.5s"
        tex[1].style.opacity = "0";
        tex[1].style.transition = "0.5s"
        tex[0].style.opacity = "0";
        tex[0].style.transition = "0.5s"
    } else {
        exp[4].style.width = "70vw";
        tex[4].style.opacity = "1";
        tex[4].style.transition = "0.5s"
    }
}
exp[4].addEventListener('click', opennnnn)