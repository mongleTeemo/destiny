const SHOW_CL = "is-show",
    HIDE_CL = "is-hide",
    swipeZone = document.querySelector(".swipe-zone"),
    typeZone = document.querySelector(".type-zone"),
    result1 = document.querySelector(".result.type1"),
    result2 = document.querySelector(".result.type2"),
    result3 = document.querySelector(".result.type3"),
    result4 = document.querySelector(".result.type4"),
    result5 = document.querySelector(".result.type5"),
    result6 = document.querySelector(".result.type6"),
    bottomDefault = document.querySelector(".bottom-default"),
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
    count = 0;
    console.log(count);
    location.reload();
}

function type() {
    let typeCurrent = count;

    if (typeCurrent <= 1) {
        result1.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 2) {
        result2.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 3) {
        result3.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 4 || typeCurrent == 5) {
        result4.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 6) {
        result5.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else if (typeCurrent == 7) {
        result6.classList.remove(HIDE_CL);
        bottomDefault.classList.remove(HIDE_CL);
    } else {
        result6.classList.remove(HIDE_CL);
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
                    title: "mongle - 카카오톡 유형 검사(KTTI)",
                    url: "https://mongle.io/ktti.html",
                })
                .then(() => {
                    console.log("Thanks for sharing!");
                })
                .catch(console.error);
        }
    });
}
function shareCopy(val) {
    let t = document.createElement("textarea");
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

function checkMobile() {
    let varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.indexOf("android") > -1) {
        //안드로이드
        return "android";
    } else if (
        varUA.indexOf("iphone") > -1 ||
        varUA.indexOf("ipad") > -1 ||
        varUA.indexOf("ipod") > -1
    ) {
        //IOS
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
}

function DownLoad() {
    checkMobile();
    console.log(checkMobile());
    const userOs = checkMobile();
    if (userOs === "android") {
        location.href("market://details?id=io.mongle.app&hl=ko");
    } else if (userOs === "ios") {
        alert("IOS 2021 1월 말 출시예정 입니다.");
    } else {
        location.href("market://details?id=io.mongle.app&hl=ko");
    }
}
