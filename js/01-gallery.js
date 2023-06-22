import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryStuff = document.querySelector(".gallery");
const createMarkUpEl = createMarkUp(galleryItems);
galleryStuff.insertAdjacentHTML("beforeend", createMarkUpEl);

function createMarkUp(images) {
  return images
    .map(
      (item) =>
        `
  <li class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
  `
    )
    .join("");
}

galleryStuff.addEventListener("click", createBasicLB);

function createBasicLB(event) {
  console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="80" height ="600">`);
  instance.show();
}
console.log(galleryItems);
