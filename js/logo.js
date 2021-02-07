

function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    var y = window.pageYOffset;
    if (y > 150) {
      document.querySelector("#white").classList.add("hide");
      document.querySelector("#black").classList.remove("hide");
    } else {
      document.querySelector("#black").classList.add("hide");
      document.querySelector("#white").classList.remove("hide");
    }
  }
}

window.onload = function() {
  onScroll();
};