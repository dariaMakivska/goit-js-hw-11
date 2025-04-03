import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// showLoader().Ця функція нічого не приймає, повинна додавати
// клас для відображення лоадера.Нічого не повертає.

// hideLoader().Ця функція нічого не приймає, повинна прибирати
// клас для відображення лоадера.Нічого не повертає.
// likes,views, comments, downloads;

const loader = document.querySelector('.loader');

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
        <div class="image-info">
          <p class="image-info-text">
            <span class="image-info-tag">Likes</span> ${likes}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Views</span> ${views}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Comments</span> ${comments}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Downloads</span> ${downloads}
          </p>
      </div>
</li>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  // const lightbox = new SimpleLightbox('.gallery a');
  // lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо весь вміст галереї
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
