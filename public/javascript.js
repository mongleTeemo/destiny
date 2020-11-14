const SHOW_CL = "is-show",
    HIDE_CL = "is-hide",
    swipeZone = document.querySelector(".swipe-zone"),
    typeZone = document.querySelector(".type-zone");
let count = 0;

function countUp() {
    count = count + 1;
    console.log(count);
}

function loadingf() {
    swipeZone.classList.add(HIDE_CL);
    typeZone.classList.remove(HIDE_CL);
}

function countRset() {
    count = 0;
    console.log(count);
}

function type() {
    let typeCurrent = count;

    if (typeCurrent <= 1) {
    } else if (typeCurrent == 2) {
    } else if (typeCurrent == 3) {
    } else if (typeCurrent == 4 || typeCurrent == 5) {
    } else if (typeCurrent == 6) {
    } else if (typeCurrent == 7) {
    }
}
