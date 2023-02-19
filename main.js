document.addEventListener("DOMContentLoaded", () => {
  init();
});
function init() {
  if (localStorage.getItem("theme")) {
    document.documentElement.setAttribute("theme", "winter");
  } else {
    document.documentElement.removeAttribute("theme");
  }
}
const changeBtn = document.querySelector(".change_theme");
changeBtn.addEventListener("click", function () {
  if (document.documentElement.hasAttribute("theme")) {
    document.documentElement.removeAttribute("theme");
    localStorage.removeItem("theme");
  } else {
    document.documentElement.setAttribute("theme", "winter");
    localStorage.setItem("theme", "winter");
  }
});
