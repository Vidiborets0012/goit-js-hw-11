
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';


const searchForm = document.querySelector('.search-form');
console.log('searchForm:', searchForm);

const gallery = document.querySelector('.gallery');
console.log('gallery:', gallery);


const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = searchForm.elements.user_query.value.trim();

  fetchPhotos(searchedValue)
    .then(data => {

      const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

      gallery.innerHTML = galleryCardsTemplate;

    })
    .catch(err => {
      console.log(err);
    })

}

searchForm.addEventListener('submit', onSearchFormSubmit);

