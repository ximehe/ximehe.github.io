const pantalla = document.getElementById('pantalla');
let visible = true;

document.body.addEventListener('click', () => {
  if (visible) {
    pantalla.classList.remove('transition-on');
    pantalla.classList.add('transition-off');
  } else {
    pantalla.classList.remove('transition-off');
    pantalla.classList.add('transition-on');
  }
  visible = !visible;
});
