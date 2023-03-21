const decrementEl = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementEl.addEventListener('click', () => {
  counterEl.textContent = counterValue--;
});

incrementEl.addEventListener('click', () => {
  counterEl.textContent = counterValue++;
});
