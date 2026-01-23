const menu = document.getElementById('profileMenu');
menu.style.display = 'none';
function toggleMenu() {  
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
  const isClickInside = document.getElementById('btnProfile').contains(event.target);
  if (!isClickInside) {
    menu.style.display = 'none';
  }
});

