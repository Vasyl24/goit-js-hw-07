import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const list = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="small-image.jpg">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>`
);

galleryList.insertAdjacentHTML('beforeend', list.join(''));
galleryList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

    instance.show();
  }
}
