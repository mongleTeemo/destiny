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
}
function countUpTypeB() {
  countB = countB + 1;
}
function countUpTypeC() {
  countC = countC + 1;
}
function countUpTypeD() {
  countD = countD + 1;
}
function countUpTypeE() {
  countE = countE + 1;
}
function countUpTypeF() {
  countF = countF + 1;
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
      typeCheck();
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

  location.reload();
}

function typeCheck() {
  let typeCurrent = Math.max(countA, countB, countC, countD, countE, countF);

  if (typeCurrent == countA) {
    resultA.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeCurrent == countB) {
    resultB.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeCurrent == countC) {
    resultC.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeCurrent == countD) {
    resultD.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeCurrent == countE) {
    resultE.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeCurrent == countF) {
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
    window.location.href = "https://subway-snack.com/";
  } else if (userOs === "ios") {
    window.location.href = "https://subway-snack.com/";
  } else {
    window.location.href = "https://subway-snack.com/";
  }
}
