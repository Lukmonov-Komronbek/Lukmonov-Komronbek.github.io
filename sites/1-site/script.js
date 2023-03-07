var sarlavha = document.title;
var nol = 0;

function matnchiqishi() {
    document.title = sarlavha.substring(0, nol);
    if (nol == sarlavha.length) {
        nol = 0;
        setTimeout("matnchiqishi()", 500)
    } else {
        nol++;
        setTimeout("matnchiqishi()", 400)
    }
}
matnchiqishi();

var nav = document.getElementById("nav");

function open_btn() {
    nav.style.left ="0";
    nav.style.opacity = "1";
}

function close_btn() {
    nav.style.left = "-200px";
    nav.style.opacity = "0";
}