function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

  const titulo = document.querySelector('h2');
  typeWriter(titulo);

  let i = 1;
  setInterval(() => {
      document.querySelector(`#item-${i}`).checked = true;
      i = i == 3 ? 1 : i + 1;
  }, 2000);
