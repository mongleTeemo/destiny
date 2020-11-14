const SHOW_CL = "is-show",
    HIDE_CL = "is-hide",
    swipeZone = document.querySelector(".swipe-zone"),
    typeZone = document.querySelector(".type-zone"),
    result1 = document.querySelector(".result.type1"),
    // result2 = document.querySelector(".result.type2"),
    // result3 = document.querySelector(".result.type3"),
    // result4 = document.querySelector(".result.type4"),
    // result5 = document.querySelector(".result.type5"),
    loadingArea = document.querySelector(".loding-area");
let count = 0;
let loadingCount = 1;
function countUp() {
    count = count + 1;
    console.log(count);
}

function loadingf() {
    swipeZone.classList.add(HIDE_CL);
    typeZone.classList.remove(HIDE_CL);
    loadingArea.innerHTML = loadingCount;
    loadingCount++;
    setTimeout(() => {
        if (loadingCount < 6) {
            loadingf()
        } else {
            loadingArea.classList.add(HIDE_CL);
            type();
        }
    }, 1000);
}

function countRset() {
    count = 0;
    console.log(count);
}

function type() {
    let typeCurrent = count;

    if (typeCurrent <= 1) {
        // result1.classList.remove(HIDE_CL);
    } else if (typeCurrent == 2) {
        // result1.classList.remove(HIDE_CL);
    } else if (typeCurrent == 3) {
        // result1.classList.remove(HIDE_CL);
    } else if (typeCurrent == 4 || typeCurrent == 5) {
        // result1.classList.remove(HIDE_CL);
    } else if (typeCurrent == 6) {
    } else if (typeCurrent == 7) {
    }
}
