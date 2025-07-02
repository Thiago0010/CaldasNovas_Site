document.querySelectorAll('.carrossel-container').forEach(carrossel => {
  const items = carrossel.querySelectorAll('.item');
  let index = 0;

  carrossel.querySelector('.btn-left').onclick = () => mudarImagem(-1);
  carrossel.querySelector('.btn-right').onclick = () => mudarImagem(1);

  function mudarImagem(direcao) {
    items[index].classList.remove('active');
    index += direcao;
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    items[index].classList.add('active');
  }
});