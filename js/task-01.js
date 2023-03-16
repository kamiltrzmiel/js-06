const catEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${catEl.length}`);
console.log(`^^^^^^^^^^^^^^^^^^^^^^^`);

for (const e of catEl) {
  console.log(`Category: ${e.children[0].innerText}`);
  console.log(`Elements: ${e.children[1].children.length}`);
  console.log(`-----------------------`);
}
