import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const imageGallery = createImageCards(galleryItems);

// create Card
container.insertAdjacentHTML("beforeend", imageGallery);
container.addEventListener("click", imgClick);

function createImageCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class ="gallery__link href="${original}">
    <img
    class="gallery__image"
    src ="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

function imgClick(evt) {
  evt.preventDefault();

  const isImage = evt.target.classList.contains("gallery__image");

  if (!isImage) {
    return;
  }

  // Modal
  const modalWindow = basicLightbox.create(
    `
     <div class="modal">
      <img src = "${evt.target.dataset.source}" width = "800" height = "600">
     </div>`,
    {
      onShow: (modalWindow) => {
        window.addEventListener("keydown", onKeyboardClick);
        console.log("onShow", modalWindow);
      },
      onClose: (modalWindow) => {
        window.addEventListener("keydown", onKeyboardClick);
        console.log("onClose", modalWindow);
      },
    }
  );

  // Escape
  modalWindow.show();
  function onKeyboardClick(evt) {
    if (evt.code === "Escape") {
      modalWindow.close();
    }
  }

  //   const currentImage = document.querySelector(".gallery__item.is-actve");

  //   if (currentImage) {
  //     currentImage.classList.remove("is-active");
  //   }

  //   const itemEl = evt.target.dataset.source;
  //   const parentImages = itemEl.closest(".gallery__item");

  //   parentImages.classList.add(".is-active");
  //   document.body.style.background = itemEl.dataset.original;
}
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

console.log(galleryItems);
