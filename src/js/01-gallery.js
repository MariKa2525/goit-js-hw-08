// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsMarkup)

function createGalleryCardsMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href = "${original}">
            <img
                class = "gallery__image"
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}"
            />
        </a>
    `;
    }).join('');
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});
