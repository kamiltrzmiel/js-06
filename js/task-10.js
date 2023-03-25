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
const beginSize = 30;
const increaseSize = 10;
let dimCount = beginSize;

createBtnEl.addEventListener('click', () => createBoxes(inputBoxEl.value));
const createBoxes = amount => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.height = `${dimCount}px`;
    box.style.width = `${dimCount}px`;
    box.style.background = getRandomHexColor();
    boxesEl.append(box);
    dimCount += increaseSize;
  }
};

//DESTROY
destroyBtnEl.addEventListener('click', () => {
  const destroyBoxes = () => (boxesEl.innerHTML = '');
  destroyBoxes();
  dimCount = beginSize;
});
