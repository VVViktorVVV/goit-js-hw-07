import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

const createGalleryIteam = function (array) {
    return array.map(({ description, original, preview }) => {
        return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img
                     class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"
                    /></a></div>`
    }).join('');
    
}

const gallery = createGalleryIteam(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', gallery);

galleryBox.addEventListener('click', showOriginalImage);


function showOriginalImage(evn) {
    evn.preventDefault();

    const originalImage = evn.target.dataset.source;
    
    const instance = basicLightbox.create(`<img src="${originalImage}">`);
    onclick = instance.show();

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            return instance.close();
        }
    })
     
}







    


