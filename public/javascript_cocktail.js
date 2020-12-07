const SHOW_CL = "is-show",
    HIDE_CL = "is-hide",
    swipeZone = document.querySelector(".swipe-zone"),
    typeZone = document.querySelector(".type-zone"),
    resultA = document.querySelector(".result.typeA"),
    resultB = document.querySelector(".result.typeB"),
    resultC = document.querySelector(".result.typeC"),
    resultD = document.querySelector(".result.typeD"),
    resultE = document.querySelector(".result.typeE"),
    resultF = document.querySelector(".result.typeF"),
    bottomDefault = document.querySelector(".bottom-default"),
    loadingArea = document.querySelector(".loding-area");
let countA = 0,
    countB = 0,
    countC = 0,
    countD = 0,
    countE = 0,
    countF = 0;
let loadingCount = 1;

function countUpTypeA() {
    countA = countA + 1;
    console.log(countA);
}
function countUpTypeB() {
    countB = countB + 1;
    console.log(countB);
}
function countUpTypeC() {
    countC = countC + 1;
    console.log(countC);
}
function countUpTypeD() {
    countD = countD + 1;
    console.log(countD);
}
function countUpTypeE() {
    countE = countE + 1;
    console.log(countE);
}
function countUpTypeF() {
    countF = countF + 1;
    console.log(countF);
}

function loadingf() {
    swipeZone.classList.add(HIDE_CL);
    typeZone.classList.remove(HIDE_CL);
    loadingCount++;
    setTimeout(() => {
        if (loadingCount < 4) {
            loadingf();
        } else {
            loadingArea.classList.add(HIDE_CL);
            type();
        }
    }, 1000);
}

function countRset() {
    countA = 0;
    countB = 0;
    countC = 0;
    countD = 0;
    countE = 0;
    countF = 0;
    console.log(countA, countB, countC, countD, countE, countF);
    location.reload();
}

function type() {
    let typeCurrent = count;

    if (typeCurrent <= 1) {
        resultA.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 2) {
        resultB.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 3) {
        resultC.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 4 || typeCurrent == 5) {
        resultD.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 6) {
        resultE.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 7) {
        resultF.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else {
        resultF.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    }
}

function shareFacebook() {
    window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(window.location.href)
    );
}
function shareKakao() {
    const shareButton = document.querySelector("#kakaoLink");
    shareButton.addEventListener("click", (event) => {
        if (navigator.share) {
            navigator
                .share({
                    title: "mongle - 칵테일로 알아보는 나의 연애 스타일",
                    url: "https://mongle.io/cocktail.html",
                })
                .then(() => {
                    console.log("Thanks for sharing!");
                })
                .catch(console.error);
        }
    });
}
function shareCopy(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
}

$("#copy").click(function () {
    shareCopy("https://mongle.io/destiny.html");
    alert("복사되었습니다.");
});
