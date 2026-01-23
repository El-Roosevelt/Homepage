const menu = document.getElementById('profileMenu');
menu.style.display = 'none';

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggleSidebar");
  const menu_button = document.getElementById("menu-button");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
    menu_button.classList.toggle("rotate");
  });
});

function toggleMenu() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener('click', function(event) {
  const isClickInside = document.getElementById('btnProfile').contains(event.target);
  if (!isClickInside) {
    menu.style.display = 'none';
  }
});
