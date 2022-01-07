const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const li = $("li");

li.mouseenter(function() {
  $(this).addClass('li-hover');
});

li.mouseleave(function() {
  $(this).removeClass('li-hover');
});

document.onclick = function(e) {
  if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'menu') {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    header.classList.remove('active');
  }
}

toggle.onclick = function() {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
  header.classList.toggle('active');
}
