
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const searchForm = document.querySelector('.search-form');
console.log('searchForm:', searchForm);

const gallery = document.querySelector('.gallery');
console.log('gallery:', gallery);

let lightbox = new SimpleLightbox('.gallery a');


const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedValue = searchForm.elements.user_query.value.trim();

    fetchPhotos(searchedValue)
        .then(data => {
                      
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matchings your search query. Please try againe!',
                    position: 'topRight',
                });

                gallery.innerHTML = '';
                searchForm.reset();

                return;
            }

            const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

            gallery.innerHTML = galleryCardsTemplate;


            // const lightbox = new SimpleLightbox('.galery a');
            lightbox.refresh();

        })
        .catch(err => {
            console.log(err);
            iziToast.error({
                message: 'Щось пішло не так. Спробуйте ще раз пізніше!',
                position: 'topRight',
            });
        });

};

searchForm.addEventListener('submit', onSearchFormSubmit);

