const boxesEl = document.querySelector('#boxes');
const inputBoxEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

//COLOR
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//CREATE
createBtnEl.addEventListener('click', () => createBoxes(inputBoxEl.value));
const createBoxes = amount => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.height = 30 + i * 10 + 'px';
    box.style.width = 30 + i * 10 + 'px';
    box.style.margin = '20px';
    box.style.background = getRandomHexColor();
    boxesEl.append(box);
  }
};

//DESTROY
destroyBtnEl.addEventListener('click', () => {
  const destroyBoxes = () => (boxesEl.innerHTML = '');
  destroyBoxes();
});
