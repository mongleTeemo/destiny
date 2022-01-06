const SHOW_CL = "is-show",
  HIDE_CL = "is-hide",
  swipeZone = document.querySelector(".swipe-zone"),
  typeZone = document.querySelector(".type-zone"),
  estp = document.querySelector(".result.estp"),
  esfp = document.querySelector(".result.esfp"),
  enfp = document.querySelector(".result.enfp"),
  entp = document.querySelector(".result.entp"),
  infp = document.querySelector(".result.infp"),
  intp = document.querySelector(".result.intp"),
  isfp = document.querySelector(".result.isfp"),
  istp = document.querySelector(".result.istp"),
  estj = document.querySelector(".result.estj"),
  esfj = document.querySelector(".result.esfj"),
  enfj = document.querySelector(".result.enfj"),
  entj = document.querySelector(".result.entj"),
  istj = document.querySelector(".result.istj"),
  isfj = document.querySelector(".result.isfj"),
  infj = document.querySelector(".result.infj"),
  intj = document.querySelector(".result.intj"),
  bottomDefault = document.querySelector(".bottom-default"),
  loadingArea = document.querySelector(".loding-area");
let countE = 0,
  countI = 0,
  countS = 0,
  countN = 0,
  countT = 0,
  countF = 0,
  countJ = 0,
  countP = 0;
let loadingCount = 1;

function countUpTypeE() {
  countE = countE + 1;
}
function countUpTypeI() {
  countI = countI + 1;
}
function countUpTypeJ() {
  countJ = countJ + 1;
}
function countUpTypeP() {
  countP = countP + 1;
}
function countUpTypeS() {
  countS = countS + 1;
}
function countUpTypeN() {
  countN = countN + 1;
}
function countUpTypeF() {
  countF = countF + 1;
}
function countUpTypeT() {
  countT = countT + 1;
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
  (countE = 0),
    (countI = 0),
    (countS = 0),
    (countN = 0),
    (countT = 0),
    (countF = 0),
    (countJ = 0),
    (countP = 0);

  location.reload();
}

function typeCheck() {
  let typeFinish = "";
  if (countI > countE) {
    typeFinish = typeFinish + "i";
  } else {
    typeFinish = typeFinish + "e";
  }
  if (countS > countN) {
    typeFinish = typeFinish + "s";
  } else {
    typeFinish = typeFinish + "n";
  }
  if (countT > countF) {
    typeFinish = typeFinish + "t";
  } else {
    typeFinish = typeFinish + "f";
  }
  if (countJ > countP) {
    typeFinish = typeFinish + "j";
  } else {
    typeFinish = typeFinish + "p";
  }
  console.log(typeFinish);

  if (typeFinish == "estp") {
    estp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "esfp") {
    esfp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "enfp") {
    enfp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "entp") {
    entp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "infp") {
    infp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "intp") {
    intp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "isfp") {
    isfp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "istp") {
    istp.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "estj") {
    estj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "esfj") {
    esfj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "enfj") {
    enfj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "entj") {
    entj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "istj") {
    istj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "isfj") {
    isfj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "infj") {
    infj.classList.remove(HIDE_CL);
    bottomDefault.classList.remove(HIDE_CL);
  } else if (typeFinish == "intj") {
    intj.classList.remove(HIDE_CL);
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
          title: "mongle - 자취력 테스트",
          url: "https://mongle.io/alon.html",
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
  shareCopy("https://mongle.io/alon.html");
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
