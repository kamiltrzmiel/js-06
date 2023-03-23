const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16737255)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener('click', () => {
  const rdmColor = getRandomHexColor();
  document.body.style.backgroundColor = rdmColor;
  textEl.textContent = rdmColor;
});
