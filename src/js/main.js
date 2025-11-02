import { fetchImages } from './pixabay-api';
import {
  buildCardsMarkup,
  drawGallery,
  clearGallery,
} from './render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');
const gallery = document.querySelector('#gallery');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  // 1) очистити попередні результати
  clearGallery();

  // 2) показати індикатор
  loader.hidden = false;

  // 3) HTTP-запит
  fetchImages(query)
    .then(data => {
      // 4) сховати індикатор
      loader.hidden = true;

      const hits = data.hits || [];

      // 5) якщо немає результатів — повідомлення
      if (hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // 6) зібрати розмітку і додати ОДНІЄЮ операцією
      const markup = buildCardsMarkup(hits);
      drawGallery(markup);
    })
    .catch(err => {
      loader.hidden = true;
      iziToast.error({
        title: 'Error',
        message: `Something went wrong (${err.message})`,
        position: 'topRight',
      });
    })
    .finally(() => {
      // 7) скинути форму
      form.reset();
    });
}
