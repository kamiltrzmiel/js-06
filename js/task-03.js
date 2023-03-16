const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

images.forEach(image => {
  const imageItem = document.createElement('li');
  galleryEl.append(imageItem);
  imageItem.insertAdjacentHTML(
    'afterbegin',
    `<img class="gallery__item" src=${image.url} alt=${image.alt})/>`
  );
});

// //const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);

// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList.add('item');
//   ingredientsEl.append(listItem);
// });
