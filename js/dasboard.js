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


document.addEventListener('DOMContentLoaded', function () {
  const scrollSuave = document.querySelector('.scroll-suave');
  const scrollSuaveItems = document.querySelector('.scroll-suave-items');
  const botoes = document.querySelectorAll('.controle-botao');
  const totalItens = botoes.length;
  let currentIndex = 0;
  let intervalId;

  function mostrarItem(index) {
    currentIndex = index;
    const containerWidth = scrollSuave.offsetWidth;
    scrollSuaveItems.style.transform = `translateX(-${containerWidth * currentIndex}px)`;

    botoes.forEach((botao, i) => {
      botao.classList.toggle('ativo', i === currentIndex);
    });

    reiniciarIntervalo();
  }

  function proximoItem() {
    const novoIndex = (currentIndex + 1) % totalItens;
    mostrarItem(novoIndex);
  }

  function iniciarIntervalo() {
    intervalId = setInterval(proximoItem, 3000);
  }

  function reiniciarIntervalo() {
    clearInterval(intervalId);
    iniciarIntervalo();
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      mostrarItem(index);
    });
  });

  iniciarIntervalo();

  scrollSuave.addEventListener('mouseenter', () => clearInterval(intervalId));
  scrollSuave.addEventListener('mouseleave', () => iniciarIntervalo());

  // ✅ Reajustar ao redimensionar a janela
  window.addEventListener('resize', () => mostrarItem(currentIndex));
});
