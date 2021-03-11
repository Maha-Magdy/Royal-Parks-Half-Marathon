document.getElementById("toggle-menu").addEventListener("click", function (e) {
  e.stopPropagation();
  show_mobile_menu();
});

function show_mobile_menu() {
  const mobile_menu = document.querySelector(".mobile-menu");
  mobile_menu.classList.toggle("mobile-menu-show");
}
