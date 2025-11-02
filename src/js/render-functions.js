import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// 1) Повертає готову розмітку карток (щоб додати за ОДНУ операцію)
export function buildCardsMarkup(images) {
  return images
    .map(
      img => `
<li class="gallery-item">
  <a href="${img.largeImageURL}">
    <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p><b>Likes:</b> ${img.likes}</p>
    <p><b>Views:</b> ${img.views}</p>
    <p><b>Comments:</b> ${img.comments}</p>
    <p><b>Downloads:</b> ${img.downloads}</p>
  </div>
</li>`
    )
    .join('');
}

// 2) Малює в DOM (однією вставкою), повертає/оновлює lightbox
let lightbox;
export function drawGallery(markup) {
  const list = document.querySelector('#gallery');
  list.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
  lightbox.refresh(); // обов'язково після додавання елементів
}

// 3) Допоміжне: очистити галерею
export function clearGallery() {
  const list = document.querySelector('#gallery');
  list.innerHTML = '';
}
