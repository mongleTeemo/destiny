const SHOW_CL = "is-show",
  HIDE_CL = "is-hide",
  bodyColor = document.querySelector(".body-color"),
  swipeZone = document.querySelector(".swipe-zone"),
  typeZone = document.querySelector(".type-zone"),
  resultA = document.querySelector(".result.type1"),
  resultB = document.querySelector(".result.type2"),
  resultC = document.querySelector(".result.type3"),
  resultD = document.querySelector(".result.type4"),
  resultE = document.querySelector(".result.type5"),
  bottomDefault = document.querySelector(".bottom-default"),
  loadingArea = document.querySelector(".loding-area");
let countA = 0,
  countB = 0,
  countC = 0,
  countD = 0,
  countE = 0;
let loadingCount = 1;

//폴마레
function countUpTypeA() {
  countA = countA + 1;
}
//앨리스 도넛
function countUpTypeB() {
  countB = countB + 1;
}
//아일드 블루
function countUpTypeC() {
  countC = countC + 1;
}
//미포집
function countUpTypeD() {
  countD = countD + 1;
}
//금샘다방
function countUpTypeE() {
  countE = countE + 1;
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
  count = 0;
  location.reload();
}
function typeCheck() {
  let typeCurrent = Math.max(countA, countB, countC, countD, countE);

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
          title: "mongle - 경주 여행코스 추천 테스트",
          url: "https://originals.mongle.io/travel_gyeongju.html",
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
  shareCopy("https://originals.mongle.io/travel_gyeongju");
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
  countRset();
  checkMobile();

  const userOs = checkMobile();
  if (userOs === "android") {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.mongle.mongle";
  } else if (userOs === "ios") {
    window.location.href =
      "https://itunes.apple.com/kr/app/apple-store/1588402690";
  } else {
    alert("안드로이드, IOS에서만 이용이 가능합니다.");
  }
}
