const inputEl = document.getElementById('font-size-control');
inputEl.value = 16;
const outputEl = document.getElementById('text');

inputEl.addEventListener('input', event => {
  outputEl.style.fontSize = event.currentTarget.value + 'px';
  console.log(event.currentTarget.value);
});
