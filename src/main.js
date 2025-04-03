import { fetchImages } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userInput = input.value.trim();

  if (userInput === '') {
    iziToast.warning({
      message: 'Enter your search word!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(userInput).then(images => {
    if (images.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(images);
  });
});
